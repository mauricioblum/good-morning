import React, { useState } from 'react';
import { ListItem } from '../../routes';

interface ChoiceProps {
  entry: ListItem;
  onClickEntry: () => void;
  isGuessed: boolean;
  isRightAnswer: boolean;
}

const Choice: React.FC<ChoiceProps> = ({ entry, onClickEntry, isGuessed, isRightAnswer }) => {
  const [selected, setSelected] = useState(false);

  const getTailwindBgClass = () => {
    if (isGuessed) {
      return isRightAnswer ? 'bg-green-400 border-green-400' : 'bg-red-300';
    }
    return 'bg-gray-200 hover:bg-gray-300';
  };

  const getTailwindBorderClass = () => {
    if (selected) {
      return 'border-black';
    }
    return '';
  };

  const handleOnClick = () => {
    setSelected(true);
    onClickEntry();
  };

  const title = entry.id.toString();
  const titleHover = title.substring(0, title.indexOf('-')).toUpperCase();

  return (
    <div
      key={entry.id}
      title={titleHover}
      onClick={handleOnClick}
      className={`flex items-center border-2 px-2 md:py-2 md:px-5 ${getTailwindBgClass()} ${getTailwindBorderClass()} w-auto md:w-20 my-0 mx-auto mb-2 flex-wrap cursor-pointer transition-all`}
    >
      <p className="phrase text-4xl">{entry.flag}</p>
    </div>
  );
};

export default Choice;
