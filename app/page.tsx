import Image from 'next/image';
import Textbox from './text';
import Title from './title';
import DareScare from './DareScare';
import AI from './ai';
import Blood from './blood';
import Footer from './social';

export default function Home() {
  return (
    <>
      <main
        id='main'
        className='flex h-[calc(100%-120px)] flex-col items-center p-24 flex-grow pb-32'
      >
        <Title />

        <Blood />
        <AI />

        {/* <Textbox /> */}
      </main>
      <Footer />
    </>
  );
}
