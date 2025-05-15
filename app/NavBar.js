'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <header className='mt-6 w-full h-full flex justify-between items-center mx-auto px-4 md:px-6 border border-[#03cd1b]'>
         <Link href='/' className='w-15 p-4'>
            <Image
               src='/images/11.jpg'
               alt='Logo'
               width={80}
               height={80}
               priority
            />
         </Link>

         <nav className='hidden md:flex gap-6 text-[32px]'>
            <Link href='#about' className='text-white hover:text-gray-300'>
               About
            </Link>
            <Link href='#tokenomics' className='text-white hover:text-gray-300'>
               Tokenomics
            </Link>
            <Link href='#how-to-buy' className='text-white hover:text-gray-300'>
               How to Buy
            </Link>
            <Link
               href='https://dexscreener.com/solana/rcRybMHUKMQNDHZpJeXJCAMkd5XkuHHFWgjDi53pump'
               target='_blank'
               className='text-white hover:text-gray-300'
            >
               Chart
            </Link>
         </nav>

         <div className='flex items-center gap-4 text-[24px]'>
            <Link
               href='https://raydium.io/swap/?inputMint=sol&outputMint=rcRybMHUKMQNDHZpJeXJCAMkd5XkuHHFWgjDi53pump'
               target='_blank'
               className="relative bg-[#079117] text-white text-[28px] px-10 py-0.5 transition border-2 border-transparent 
               before:absolute before:inset-0 before:border-2 before:border-[#00c817] before:blur-sm before:opacity-0 
               hover:before:opacity-100 hover:bg-[#00c817]"
            >
               Buy $KAWAI
            </Link>

            <button
               className='md:hidden flex flex-col space-y-1'
               onClick={() => setMenuOpen(!menuOpen)}
            >
               <div
                  className={`w-6 h-0.5 bg-white transition ${
                     menuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
               />
               <div
                  className={`w-6 h-0.5 bg-white transition ${
                     menuOpen ? 'opacity-0' : ''
                  }`}
               />
               <div
                  className={`w-6 h-0.5 bg-white transition ${
                     menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
               />
            </button>
         </div>

         {menuOpen && (
            <div className='absolute top-16 right-4 bg-gray-900 text-white p-6 rounded-lg shadow-lg md:hidden'>
               <nav className='flex flex-col gap-4'>
                  <Link href='#about' onClick={() => setMenuOpen(false)}>
                     About
                  </Link>
                  <Link href='#tokenomics' onClick={() => setMenuOpen(false)}>
                     Tokenomics
                  </Link>
                  <Link href='#how-to-buy' onClick={() => setMenuOpen(false)}>
                     How to Buy
                  </Link>
                  <Link
                     href='https://dexscreener.com/solana/rcRybMHUKMQNDHZpJeXJCAMkd5XkuHHFWgjDi53pump'
                     target='_blank'
                     onClick={() => setMenuOpen(false)}
                  >
                     Chart
                  </Link>
               </nav>
            </div>
         )}
      </header>
   );
}
