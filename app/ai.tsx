'use client';

import { useState } from 'react';
import DareScare from './DareScare';
import { AIResponse, MysteryResponse, ScareResponse } from './api';
import Image from 'next/image';

interface ImageData {
  url: string;
  prompt: string;
}

interface MysteryData {
  result: string;
  category: string;
}

export default function AI() {
  const [spooky, setSpooky] = useState('');
  const [res, setRes] = useState('');
  const [imageData, setImageData] = useState<ImageData>();
  const [isLoading, setIsLoading] = useState(false);
  const [mystery, setMystery] = useState<MysteryData>();

  console.log(spooky);

  const handleClick = async (spooky: string) => {
    setSpooky(spooky);

    if (spooky === 'Dare') {
      setIsLoading(true);
      const data = await AIResponse(spooky);
      setRes(data);
      setIsLoading(false);
    } else if (spooky === 'Scare') {
      setIsLoading(true);
      const data = await ScareResponse(spooky);
      if (data) {
        setImageData(data);
        setIsLoading(false);
      }
    } else {
      setIsLoading(true);
      const data = await MysteryResponse(spooky);
      if (data) {
        setIsLoading(false);
        setMystery(data);
      }
    }
  };

  console.log('imageData ', imageData?.url);
  console.log('mystery ', mystery);

  return (
    <>
      <DareScare setSelectedOption={handleClick} />
      {isLoading && (
        <div className='mt-9 text-center'>
          Loading... Give it a few seconds, service isn&apos;t too good here. 👻
        </div>
      )}

      {!isLoading && res && spooky === 'Dare' && (
        <div className='mt-9 text-center'>{res}</div>
      )}
      {!isLoading && mystery && spooky === 'Mystery' && (
        <>
          <div className='mt-9 mb-2 text-center'>{mystery.category}</div>
          <div className='text-center'>{mystery?.result}</div>
        </>
      )}
      {!isLoading && imageData && spooky === 'Scare' && (
        <>
          <Image alt='generated photo' className='mb-6' src={imageData?.url} />
          <p>Text used to generate image: {imageData?.prompt}</p>
        </>
      )}
    </>
  );
}
