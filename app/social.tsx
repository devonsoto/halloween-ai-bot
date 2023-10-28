import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='fixed z-50 w-full bg-black h-28 bottom-0 flex items-center justify-center '>
      <p className='mr-8'>Add me on IG</p>
      <a
        href='https://www.instagram.com/devonsoto_/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaInstagram fill={'#8B0000'} size='24' />
      </a>
    </footer>
  );
};

export default Footer;
