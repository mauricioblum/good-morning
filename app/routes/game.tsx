import { useLoaderData } from 'remix';
import data from '../../data/data.json';

import { Data, ListItem, getGoodMorningOfTheDay } from '.';
import { useEffect, useRef, useState } from 'react';
import Choice from '../components/Choice';
import Toast, { ToastHandle } from '../components/Toast';
import { parseFlag } from '../utils/parseEmojiFlag';

type GameData = Data & {
  entries: ListItem[][];
};

function getSolutions(): ListItem[] {
  const epochs = [
    new Date('January 1, 1980 00:00:00').valueOf(),
    new Date('January 1, 1981 00:00:00').valueOf(),
    new Date('January 1, 1982 00:00:00').valueOf(),
    new Date('January 1, 1983 00:00:00').valueOf(),
    new Date('January 1, 1984 00:00:00').valueOf(),
  ];

  const msInDay = 86400000;
  const now = Date.now();

  const randomIndexes = [
    Math.floor((now - epochs[0]) / msInDay),
    Math.floor((now - epochs[1]) / msInDay),
    Math.floor((now - epochs[2]) / msInDay),
    Math.floor((now - epochs[3]) / msInDay),
    Math.floor((now - epochs[4]) / msInDay),
  ];

  const filteredData = data.list;
  const size = filteredData.length;

  const randomIndex = randomIndexes[0] % size;
  const randomIndex2 = randomIndexes[1] % size;
  const randomIndex3 = randomIndexes[2] % size;
  const randomIndex4 = randomIndexes[3] % size;
  const randomIndex5 = randomIndexes[4] % size;

  return [
    filteredData[randomIndex],
    filteredData[randomIndex2],
    filteredData[randomIndex3],
    filteredData[randomIndex4],
    filteredData[randomIndex5],
  ];
}

const msInDay = 86400000;

function getRandomEntriesFromData(solution: ListItem, index: number): ListItem[] {
  const epochs = [
    new Date(`January 1, ${1993 + index} 00:00:00`).valueOf(),
    new Date(`January 1, ${1997 + index} 00:00:00`).valueOf(),
    new Date(`January 1, ${1999 + index} 00:00:00`).valueOf(),
    new Date(`January 1, ${2005 + index} 00:00:00`).valueOf(),
  ];

  const now = Date.now();

  const randomIndexes = [
    Math.floor((now - epochs[0]) / msInDay),
    Math.floor((now - epochs[1]) / msInDay),
    Math.floor((now - epochs[2]) / msInDay),
    Math.floor((now - epochs[3]) / msInDay),
  ];

  const filteredData = data.list.filter((d) => d.id !== solution.id);
  const size = filteredData.length;

  const randomIndex = randomIndexes[0] % size;
  const randomIndex2 = randomIndexes[1] % size;
  const randomIndex3 = randomIndexes[2] % size;
  const randomIndex4 = randomIndexes[3] % size;

  return [
    filteredData[randomIndex],
    filteredData[randomIndex2],
    filteredData[randomIndex3],
    filteredData[randomIndex4],
  ];
}

function shuffleArray(array: ListItem[]): ListItem[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getEntries(solution: ListItem, index: number): ListItem[] {
  const alternatives = shuffleArray([...getRandomEntriesFromData(solution, index), solution]);
  return alternatives;
}

export const loader = () => {
  return {
    goodMorning: getGoodMorningOfTheDay(data.list).solution,
    entries: getSolutions().map((solution, index) => getEntries(solution, index)),
    ENV: {
      WEBSITE_URL: process.env.WEBSITE_URL,
    },
  };
};

type Guesses = Record<number, boolean>;

export default function Game() {
  const [guesses, setGuesses] = useState<Guesses>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [choices, setChoices] = useState<Guesses>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const [viewTips, setViewTips] = useState(false);

  const [allGuesses, setAllGuessed] = useState<boolean>(false);

  const toastRef = useRef<ToastHandle>(null);

  const [shareTexts, setShareTexts] = useState<string[]>([]);

  const data = useLoaderData<GameData>();

  const entries = data.entries;

  const handleGuess = (index: number, entry: ListItem[], alternative: ListItem) => {
    let text = '';
    if (alternative.id === getSolutions()[index].id) {
      setChoices((choices) => ({
        ...choices,
        [index]: true,
      }));
      text = entry.map((e) => (e.id === alternative.id ? '🟩' : '🟥')).join('');
    } else {
      text = entry.map(() => '🟥').join('');
    }
    setShareTexts([...shareTexts, text]);

    setGuesses({
      ...guesses,
      [index]: true,
    });
  };

  const handleShare = () => {
    let line1 = '';
    let line2 = '';
    let line3 = '';
    let line4 = '';
    let line5 = '';
    for (let i = 0; i < shareTexts.length; i++) {
      const choices = [...shareTexts[i]];
      for (let j = 0; j < choices.length; j++) {
        if (j === 0) {
          line1 += choices[j];
        } else if (j === 1) {
          line2 += choices[j];
        } else if (j === 2) {
          line3 += choices[j];
        } else if (j === 3) {
          line4 += choices[j];
        } else if (j === 4) {
          line5 += choices[j];
        }
      }
    }
    const choicesText = `${line1}\n${line2}\n${line3}\n${line4}\n${line5}`;
    const flagsText = `🚩🚩 ${
      Object.values(choices).filter((c) => c === true).length
    }/5 | Good Morning Flag Game 🚩🚩`;
    const shareText = `${flagsText}\n\n${choicesText}\n\n${data.ENV.WEBSITE_URL}/game`;
    if (navigator.share) {
      navigator.share({
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toastRef.current?.showToast();
    }
    console.log(shareText);
  };

  useEffect(() => {
    if (Object.values(guesses).every((g) => g === true)) {
      setAllGuessed(true);
    }
  }, [guesses]);

  return (
    <div className="relative h-screen w-full">
      <div className="pt-10 relative w-full flex flex-col text-center">
        <h1 className="text-4xl">GMG</h1>
        <h2 className="text-3xl">Good Morning Game</h2>
        <p>
          How to play: <br /> Select the flag corresponding to the Good Morning. <br />
          If the same flag appears more than once per Good Morning, hover to see which language the
          flag is referring to.
        </p>
      </div>
      <section className="relative w-full flex flex-col pt-10 md:pt-20 text-center md:flex-row md:items-center md:justify-center md:text-center px-5">
        {entries.map((entry, index) => (
          <div key={index} className="guess md:w-1/5">
            <h1 className="mb-1 md:mb-5 md:text-4xl text-base md:h-28">
              {getSolutions()[index].phrase}
            </h1>
            <div className="options mr-2 flex flex-row md:flex-col">
              {entry.map((alternative) => (
                <Choice
                  key={alternative.id}
                  entry={alternative}
                  isRightAnswer={alternative.id === getSolutions()[index].id}
                  isGuessed={guesses[index]}
                  onClickEntry={() => handleGuess(index, entry, alternative)}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
      {allGuesses && (
        <div className="absolute bottom-4 right-3">
          <button
            className="bg-neutral-300 hover:bg-neutral-500 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => {
              setViewTips(true);
            }}
          >
            <span className="mr-3">🌎</span>View descriptions
          </button>
          <button
            className="bg-neutral-700 hover:bg-neutral-900 text-white font-bold py-2 px-4 rounded"
            onClick={handleShare}
          >
            <span className="mr-3">🔁</span>Share results
          </button>
        </div>
      )}
      {viewTips && (
        <div className="w-full p-10 px-20 mt-10 flex flex-col justify-center align-center text-center">
          {entries.map((entry, index) => (
            <div className="flex align-center">
              <div className="mr-5">
                <p>{parseFlag(getSolutions()[index].flag)}</p>
              </div>
              <div>
                <p>{getSolutions()[index].description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="relative w-full flex align-center justify-center">
        <Toast ref={toastRef} message="Copied to clipboard!" />
      </div>
    </div>
  );
}
