import { useLoaderData } from 'remix';
import data from '../../data/data.json';

interface ListItem {
  id: string;
  phrase: string;
  description: string;
  flag: string;
}

interface Data {
  goodMorning: ListItem;
  ENV: Record<string, string>;
}

// function randomGoodMorning(list: ListItem[]): number {
//   return Math.floor(Math.random() * list.length);
// }

function getGoodMorningOfTheDay(goodMorningList: ListItem[]) {
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf();
  const msInDay = 86400000;
  // fake new date
  // const t = new Date();
  // t.setDate(4);
  // const now = t.getTime();
  const now = Date.now();
  const index = Math.floor((now - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs;

  return {
    solution: goodMorningList[index % goodMorningList.length],
    solutionIndex: index,
    tomorrow: nextday,
  };
}

export const loader = () => {
  return {
    goodMorning: getGoodMorningOfTheDay(data.list).solution,
    ENV: {
      WEBSITE_URL: process.env.WEBSITE_URL,
    },
  } as Data;
};

import type { MetaFunction } from 'remix';
import GithubIcon from '../components/GithubIcon';
import { useLocalStorage } from '../utils/useLocalStorage';
import { ToggleButton } from '../components/ToggleButton';
import { parseEmojiFlag } from '../utils/parseEmojiFlag';
import Toast, { ToastHandle } from '../components/Toast';
import { useRef } from 'react';

export const meta: MetaFunction = ({ data }: { data: Data | undefined }) => {
  if (!data) {
    return {
      title: 'A new good morning every day',
      description: 'A random good morning phrase in a different language every day',
      'og:title': 'A new good morning every day',
      'og:type': 'website',
      'og:description': 'A random good morning phrase in a different language every day',
      'og:url': '',
      'og:image': '',
      'twitter:card': 'summary_large_image',
      'twitter:image': '',
    };
  }
  const goodMorningOfTheDay = data.goodMorning;
  return {
    title: `${goodMorningOfTheDay.flag} | ${goodMorningOfTheDay.phrase}`,
    description: goodMorningOfTheDay.description,
    'og:title': `${goodMorningOfTheDay.flag} | ${goodMorningOfTheDay.phrase}`,
    'og:type': 'website',
    'og:description': goodMorningOfTheDay.description,
    'og:url': data.ENV.WEBSITE_URL,
    'og:image': `${data.ENV.WEBSITE_URL}/social/${parseEmojiFlag(goodMorningOfTheDay.flag)}-${
      goodMorningOfTheDay.phrase
    }.png`,
    'twitter:card': 'summary_large_image',
    'twitter:image': `${data.ENV.WEBSITE_URL}/social/${parseEmojiFlag(goodMorningOfTheDay.flag)}-${
      goodMorningOfTheDay.phrase
    }.png`,
  };
};

export default function Index() {
  const data = useLoaderData<Data>();
  const goodMorningOfTheDay = data.goodMorning;
  const { state: themePreference, setWithLocalStorage } = useLocalStorage('themePreference');

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setWithLocalStorage(document.documentElement.classList[0] ? 'dark' : 'light');
  };

  const toastRef = useRef<ToastHandle>(null);

  const shareText = () => {
    const url = new URL(data.ENV.WEBSITE_URL);
    const shareText = `${goodMorningOfTheDay.flag} | ${goodMorningOfTheDay.phrase} 
    
${url}`;

    if (navigator.share) {
      navigator.share({
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toastRef.current?.showToast();
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen px-5">
      <div className="flex absolute left-3 top-3">
        <ToggleButton
          onChange={toggleDarkMode}
          icons={{
            checked: '🌙',
            notChecked: '☀️',
          }}
        />
      </div>

      <div className="flex absolute right-3 top-3">
        <a className="flex items-center" href="https://github.com/mauricioblum/good-morning">
          <span className="mr-2">View on GitHub</span>{' '}
          <GithubIcon fill={themePreference === 'light' ? undefined : '#fff'} />
        </a>
      </div>
      <p
        translate="no"
        className="text-center text-gray-700 md:text-8xl text-6xl font-bold transition-all"
      >
        {goodMorningOfTheDay.flag}
      </p>
      <h1 translate="no" className="md:text-8xl text-6xl font-bold mb-8 transition-all max-w-full">
        {goodMorningOfTheDay.phrase}
      </h1>
      <p className="dark:text-white max-h-36 overflow-y-scroll md:overflow-visible md:max-h-auto md:text-xl text-lg px-4 transition-all">
        {goodMorningOfTheDay.description}
      </p>

      <div className="share flex flex-col mt-10">
        <button
          onClick={shareText}
          className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded"
        >
          Share
        </button>
      </div>
      <Toast ref={toastRef} message="Copied to clipboard!" />
    </section>
  );
}
