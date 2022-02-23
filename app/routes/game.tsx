import { useLoaderData } from 'remix';
import data from '../../data/data.json';

import { Data, ListItem, getGoodMorningOfTheDay } from '.';
import { useEffect, useRef, useState } from 'react';
import Choice from '../components/Choice';
import Toast, { ToastHandle } from '../components/Toast';
import { parseFlag } from '../utils/parseEmojiFlag';
import { useLocalStorage } from '../utils/useLocalStorage';
import { CountDownTimer } from '../components/Countdown';

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

function shuffleArray(array: ListItem[], isPlayed?: boolean): ListItem[] {
  if (isPlayed) {
    return array;
  }

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
      STORAGE_VERSION: process.env.STORAGE_VERSION,
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

  const [entryIndex, setEntryIndex] = useState<Guesses>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const { state: gameData, setWithLocalStorage } = useLocalStorage('@GMG:UserData');

  const [timer, setTimer] = useState(() => {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

    return {
      hours: endOfDay.getHours() - now.getHours(),
      minutes: endOfDay.getMinutes() - now.getMinutes(),
      seconds: endOfDay.getSeconds() - now.getSeconds(),
    };
  });

  const [selectionArray, setSelectionArray] = useState<number[]>([]);

  const [viewTips, setViewTips] = useState(false);

  const [allGuessed, setAllGuessed] = useState<boolean>(false);

  const toastRef = useRef<ToastHandle>(null);

  const infoRef = useRef<HTMLDivElement>(null);

  const tipsRef = useRef<HTMLDivElement>(null);

  const [shareTexts, setShareTexts] = useState<string[]>([]);

  const data = useLoaderData<GameData>();

  const [entries, setEntries] = useState<ListItem[][]>(
    gameData ? JSON.parse(gameData).entries : data.entries
  );

  const handleGuess = (index: number, entry: ListItem[], alternative: ListItem) => {
    setSelectionArray([...selectionArray, entry.indexOf(alternative)]);

    if (entryIndex[index]) {
      return;
    }

    setEntryIndex((prev) => ({
      ...prev,
      [index]: true,
    }));

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
    let shareText = '';
    const isMobile = document.documentElement.clientWidth < 768;

    const flagsText = `🚩🚩 ${
      Object.values(choices).filter((c) => c === true).length
    }/5 | Good Morning Flag Game 🚩🚩`;

    if (isMobile) {
      const linesText = shareTexts.join('\n');
      shareText = `${flagsText}\n\n${linesText}\n\n${data.ENV.WEBSITE_URL}/game`;
    } else {
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
      shareText = `${flagsText}\n\n${choicesText}\n\n${data.ENV.WEBSITE_URL}/game`;
    }

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

  function resetGameState() {
    setAllGuessed(false);
    setShareTexts([]);
    setChoices({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
    });
    setEntryIndex({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
    });
    setGuesses({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
    });
    setSelectionArray([]);
    setEntries(data.entries);
  }

  useEffect(() => {
    if (gameData) {
      const version = JSON.parse(gameData).version;
      const currentVersion = data.ENV.STORAGE_VERSION;

      if (!version) {
        localStorage.removeItem('@GMG:UserData');
        resetGameState();
      } else if (version !== currentVersion) {
        localStorage.removeItem('@GMG:UserData');
        resetGameState();
      }
    }
  }, [gameData]);

  useEffect(() => {
    if (Object.values(guesses).every((g) => g === true)) {
      setAllGuessed(true);
      if (gameData) {
        const newGameState = {
          ...JSON.parse(gameData),
          allGuessed: true,
          entries,
          choices,
          selectionArray,
          shareTexts,
          dayPlayed: new Date().getDate(),
          version: data.ENV.STORAGE_VERSION,
        };
        setWithLocalStorage(JSON.stringify(newGameState));
      }
      setTimeout(() => {
        infoRef?.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [guesses]);

  useEffect(() => {
    if (gameData) {
      const currentDay = new Date().getDate();

      const dayPlayed = JSON.parse(gameData).dayPlayed;

      if (dayPlayed !== currentDay) {
        localStorage.removeItem('@GMG:UserData');
        resetGameState();
        return;
      }

      const allGuessed = JSON.parse(gameData).allGuessed;
      const choices = JSON.parse(gameData).choices;
      const shareTexts = JSON.parse(gameData).shareTexts;
      setShareTexts(shareTexts);
      setAllGuessed(allGuessed);
      setChoices(choices);
      setEntryIndex({
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
      });
      setGuesses({
        0: true,
        1: true,
        2: true,
        3: true,
        4: true,
      });
      const selection = JSON.parse(gameData).selectionArray ?? [];
      setSelectionArray(selection);
    }
  }, [gameData]);

  return (
    <div className="relative h-full min-h-screen w-full pb-6 bg-gradient-to-b from-amber-200 to-cyan-500 dark:from-zinc-800 dark:to-slate-700">
      <div className="pt-2 px-2 md:pt-5 relative w-full flex flex-col text-center">
        <h2 className="pretty text-3xl mb-2">Good Morning Game</h2>
        <p className="pretty text-lg">
          How to play: <br /> Select the flag corresponding to the Good Morning phrase above each
          row.
        </p>
      </div>
      <section className="relative w-full flex flex-col pt-5 md:pt-10 text-center md:flex-row md:items-center md:justify-center md:text-center px-5">
        {entries.map((entry, index) => {
          const defaultSelectedIndex = selectionArray[index];
          return (
            <div key={index} className="guess md:w-1/5">
              <h1 className="mb-1 md:mb-2 lg:mb-5 md:text-2xl lg:text-4xl text-base md:h-28">
                {getSolutions()[index].phrase}
              </h1>
              <div className="options mr-2 flex flex-row md:flex-col">
                {entry.map((alternative, altIndex) => (
                  <Choice
                    key={alternative.id}
                    entry={alternative}
                    isRightAnswer={alternative.id === getSolutions()[index].id}
                    isGuessed={guesses[index] || allGuessed}
                    isEntrySelected={entryIndex[index]}
                    defaultSelected={defaultSelectedIndex === altIndex}
                    onClickEntry={() => handleGuess(index, entry, alternative)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
      {allGuessed && (
        <div ref={infoRef} className="mt-2 flex flex-col items-center justify-center">
          <div className="flex items-center bg-black bg-opacity-20 p-2 rounded-lg">
            <button
              className="bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => {
                setViewTips(true);
                setTimeout(() => {
                  tipsRef.current?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <span className="mr-3">🌎</span>
              <span className="pretty">More info</span>
            </button>
            <button
              className="bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded flex items-center"
              onClick={handleShare}
            >
              <span className="mr-3">🔁</span>
              <span className="pretty hidden md:block">Share results</span>
              <span className="pretty flex md:hidden">Share</span>
            </button>
          </div>
          <div className="flex flex-col mt-1">
            <p className="pretty mr-2 text-center">
              You got {`${Object.values(choices).filter((c) => c === true).length}/5`} !
            </p>
            <div className="flex items-center mt-1 text-center">
              <p className="pretty mr-1">Next flags in</p>
              <CountDownTimer hours={timer.hours} minutes={timer.minutes} seconds={timer.seconds} />
            </div>
          </div>
        </div>
      )}
      {viewTips && (
        <div
          ref={tipsRef}
          className="w-full p-5 md:p-20 mt-5 md:mt-10 flex flex-col justify-center align-center md:text-center"
        >
          {entries.map((entry, index) => (
            <div className="flex align-center mb-2" key={index}>
              <div className="mr-5">
                <p className="flex flex-col w-5 h-6 items-center justify-center">
                  {parseFlag(getSolutions()[index].flag, 128, 128)}
                </p>
              </div>
              <div>
                <p>{getSolutions()[index].description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="absolute top-2/4 w-full flex align-center justify-center">
        <Toast ref={toastRef} message="Copied to clipboard!" />
      </div>
      <div className="absolute bottom-1 w-full flex flex-col items-center transition-all">
        <p className="pretty text-stone-300 text-sm">
          Made by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-stone-500"
            href="https://twitter.com/maublum"
          >
            @maublum
          </a>
        </p>
        <p className="pretty text-stone-300 text-sm">
          Information taken from{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-stone-500"
            href="https://www.araioflight.com/good-morning-different-languages-world/"
          >
            this
          </a>{' '}
          article.
        </p>
      </div>
    </div>
  );
}
