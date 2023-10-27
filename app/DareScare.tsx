'use client';

type DareScareProps = {
  setSelectedOption: (option: string) => void;
};

const DareScare = ({ setSelectedOption }: DareScareProps) => {
  return (
    <div className='flex justify-center w-full flex-col items-center text-bloodRed'>
      <div className='mb-6'>
        <button
          className='hover:bg-red-700  font-bold py-2 px-4 rounded bg-pumpkinBlood mr-6'
          onClick={() => {
            setSelectedOption('Dare');
          }}
        >
          Dare
        </button>
        <button
          className='hover:bg-red-700  font-bold py-2 px-4 rounded bg-pumpkinBlood'
          onClick={() => {
            setSelectedOption('Scare');
          }}
        >
          Scare
        </button>
      </div>
      <div>
        <button
          className='hover:bg-red-700  font-bold py-2 px-4 rounded bg-pumpkinBlood mb-6'
          onClick={() => {
            setSelectedOption('Mystery');
          }}
        >
          Mystery
        </button>
      </div>
    </div>
  );
};

export default DareScare;
