import { useLoaderData } from 'remix';
import data from '../../data/data.json';

interface ListItem {
  id: string;
  phrase: string;
  description: string;
  flag: string;
}

interface Data {
  list: ListItem[];
  selectedIndex: number;
}

function randomGoodMorning(list: ListItem[]): number {
  return Math.floor(Math.random() * list.length);
}

export const loader = () => {
  return {
    list: data.list,
    selectedIndex: randomGoodMorning(data.list),
  } as Data;
};

import type { MetaFunction } from 'remix';
import GithubIcon from '../components/GithubIcon';

export const meta: MetaFunction = ({ data }: { data: Data | undefined }) => {
  if (!data) {
    return {
      title: 'A new good morning every day',
      description: 'A random good morning phrase in a different language every day',
    };
  }
  const goodMorningOfTheDay = data.list[data.selectedIndex];

  return {
    title: `${goodMorningOfTheDay.flag} | ${goodMorningOfTheDay.phrase}`,
    description: goodMorningOfTheDay.description,
  };
};

export default function Index() {
  const data = useLoaderData<Data>();
  const goodMorningOfTheDay = data.list[data.selectedIndex];

  return (
    <section className="flex flex-col items-center justify-center text-center h-screen px-5">
      <div className="flex absolute right-3 top-3">
        <a className="flex items-center" href="https://github.com/mauricioblum/good-morning">
          <span className="mr-2">View on GitHub</span> <GithubIcon />
        </a>
      </div>
      <p className="text-center text-gray-700 md:text-8xl text-6xl font-bold transition-all">
        {goodMorningOfTheDay.flag}
      </p>
      <h1 className="md:text-8xl text-6xl font-bold mb-8 transition-all max-w-full">
        {goodMorningOfTheDay.phrase}
      </h1>
      <p className="md:text-xl text-lg px-4 transition-all">{goodMorningOfTheDay.description}</p>
    </section>
  );
}
