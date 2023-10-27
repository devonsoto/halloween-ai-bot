'use client';

import { useState } from 'react';
import DareScare from './DareScare';
import { AIResponse, ScareResponse } from './api';

interface ImageData {
  url: string;
  prompt: string;
}

export default function AI() {
  const [spooky, setSpooky] = useState('');
  const [res, setRes] = useState('');
  const [imageData, setImageData] = useState<ImageData>();
  const [isLoading, setIsLoading] = useState(false);

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
      const data = await AIResponse(spooky);
      setRes(data);
    }
  };

  console.log('imageData ', imageData?.url);

  return (
    <div>
      <DareScare setSelectedOption={handleClick} />
      {isLoading && (
        <div className='mt-9 text-center'>
          Loading... Give it a few seconds, service isn&apos;t too good here. 👻
        </div>
      )}

      {!isLoading && res && <div className='mt-9 text-center'>{res}</div>}
      {!isLoading && imageData && (
        <>
          <img className='mb-6' src={imageData?.url} />
          <p>Text used to generate image: {imageData?.prompt}</p>
        </>
      )}
    </div>
  );
}
