'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export const MusicButton = ({ isPlayMusic, setIsPlayMusic, audio }) => {
   useEffect(() => {
      if (!audio) return;

      const handleEnded = () => {
         audio.currentTime = 0;
         audio.play();
      };

      if (isPlayMusic) {
         audio.play();
         audio.volume = 0.5;
         audio.addEventListener('ended', handleEnded);
      } else {
         audio.pause();
         audio.currentTime = 0;
         audio.removeEventListener('ended', handleEnded);
      }

      return () => {
         audio.pause();
         audio.currentTime = 0;
         audio.removeEventListener('ended', handleEnded);
      };
   }, [isPlayMusic, audio]);

   return (
      <button
         onClick={() => setIsPlayMusic((prev) => !prev)}
         className='fixed bottom-4 right-4 px-4 py-2 text-white rounded'
      >
         {!isPlayMusic ? (
            <Image
               src='/images/pause.png'
               alt='pause'
               className='w-full h-full'
               priority
               width={60}
               height={60}
            />
         ) : (
            <Image
               src='/images/play.png'
               alt='play'
               className='w-full h-full'
               priority
               width={60}
               height={60}
            />
         )}
      </button>
   );
};
