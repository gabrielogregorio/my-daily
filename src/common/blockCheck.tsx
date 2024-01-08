import type { ReactElement } from 'react';

type Props = {
  isChecked: boolean;
  update: (value: boolean) => void;
};

export const BlockCheck = ({ isChecked, update }: Props): ReactElement => {
  return (
    <button
      type="button"
      aria-label={isChecked ? 'done' : 'not done'}
      onClick={(): void => update(!isChecked)}
      className="h-full w-full flex items-center justify-center py-[4px] px-[8px] pr-[16px]">
      <div className="border border-transparent hover:border-textColor/20 hover:bg-textColor/10 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className="fill-textColor">
          {isChecked ? (
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          ) : (
            <path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
          )}
        </svg>
      </div>
    </button>
  );
};
