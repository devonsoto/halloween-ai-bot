'use client';

import { useState } from 'react';
import DareScare from './DareScare';
import { AIResponse } from './api';

export default function AI() {
  const [spooky, setSpooky] = useState('');
  const [res, setRes] = useState('');

  console.log(spooky);

  const handleClick = async (spooky: string) => {
    setSpooky(spooky);

    if (spooky === 'dare') {
      const data = await AIResponse(spooky);
      setRes(data);
    } else if (spooky === 'scare') {
      const data = await AIResponse(spooky);
      setRes(data);
    } else {
      const data = await AIResponse(spooky);
      setRes(data);
    }
  };

  return (
    <div>
      <DareScare setSelectedOption={handleClick} />
      <div className='mt-9 text-center'>{res}</div>
    </div>
  );
}
