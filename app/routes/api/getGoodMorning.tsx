import { Data, ListItem } from '..';
import data from '../../../data/data.json';

export function getGoodMorningOfTheDay(goodMorningList: ListItem[]) {
  const randomIndex = Math.floor(Math.random() * goodMorningList.length);

  return {
    solution: goodMorningList[randomIndex % goodMorningList.length],
    solutionIndex: randomIndex,
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
