import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bottom-0 absolute mb-10 flex items-center '>
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
