'use client';

type DareScareProps = {
  setSelectedOption: (option: string) => void;
};

const DareScare = ({ setSelectedOption }: DareScareProps) => {
  return (
    <div className='flex justify-center w-full flex-col'>
      <div className='mb-6'>
        <button
          className='hover:bg-red-700 text-white font-bold py-2 px-4 rounded bg-pumpkinBlood mr-6'
          onClick={() => {
            setSelectedOption('Dare');
          }}
        >
          Dare
        </button>
        <button
          className='hover:bg-red-700 text-white font-bold py-2 px-4 rounded bg-pumpkinBlood'
          onClick={() => {
            setSelectedOption('Scare');
          }}
        >
          Scare
        </button>
      </div>
      <div>
        <button
          className='hover:bg-red-700 text-white font-bold py-2 px-4 rounded bg-pumpkinBlood'
          onClick={() => {
            setSelectedOption('Scare');
          }}
        >
          Mystery
        </button>
      </div>
    </div>
  );
};

export default DareScare;
