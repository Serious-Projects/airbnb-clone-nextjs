'use client';

import { IconType } from 'react-icons';

type CategoryInputProps = {
  icon: IconType;
  label: string;
  selected: boolean;
  onClick: (value: string) => void;
};

function CategoryInput({ label, selected, onClick, icon: Icon }: CategoryInputProps) {
  return (
    <div
      className={`flex flex-col gap-3 border-2 p-4 rounded-xl hover:border-black ${
        selected ? 'border-black' : 'border-neutral-200'
      }`}
      onClick={() => onClick(label)}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
}

export default CategoryInput;
