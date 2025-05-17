'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ChatComponent from './ChatComponent';
import Navbar from './NavBar';
import Link from 'next/link';
import Popup from './Popup';
import { MusicButton } from './MusicButton';
import { Footer } from './Footer';

export const icons = [
   { img: 'ico_1', url: 'https://t.me/KawaiAgent' },
   { img: 'ico_2', url: 'https://x.com/i/communities/1923652589448532153' },
   { img: 'ico_3', url: 'https://www.dextools.io/app/en/solana/pair-explorer/eJcxLfN96TyHAQpMfJQpVvMMWS9mgfM5Vfty9TDpump?t=1746999917219' },
   { img: 'ico_4', url: 'https://dexscreener.com/solana/eJcxLfN96TyHAQpMfJQpVvMMWS9mgfM5Vfty9TDpump' }
];

export default function Home() {
   const [isPlayMusic, setIsPlayMusic] = useState(false);
const [showCopied, setShowCopied] = useState(false);
   const [audio, setAudio] = useState(null);

   useEffect(() => {
      if (typeof window !== 'undefined') {
         const audioInstance = new Audio('/media/312312.mp3'); // Загружаем аудиофайл
         setAudio(audioInstance);
      }
   }, []);

   return (
      <div className='flex items-center justify-center font-[Bonzai]'>
         <MusicButton
            isPlayMusic={isPlayMusic}
            setIsPlayMusic={setIsPlayMusic}
            audio={audio}
         />
         <Popup setIsPlayMusic={setIsPlayMusic} />
         <div className='w-full max-w-[1280px] font-[Bonzai] flex flex-col items-center justify-center'>
            <Navbar />
            <Image
               src='/images/main.gif'
               alt='main'
               className='w-full h-full mt-16'
               priority
               width={1280}
               height={1280}
            />

            <div className='flex flex-col gap-6 text-center mt-12'>
               <h2
                  data-text='KAWAI WORLD'
                  className='main-anim-text text-[32px] md:text-[48px]'
               >
                  KAWAI WORLD
               </h2>

               <div className='max-w-[560px]'>
                  <p className='text-[24px] flex items-center justify-center leading-none'>
                     AI AGENT | $KAWAI
                     {/* <span className='text-[32px] font-[Delicious] mx-2 flex items-center'>
                        |
                     </span>
                     <span className='text-[36px] font-[Delicious] flex items-center relative top-[-2px]'>
                        $
                     </span> */}
                  </p>

                  <div className='flex gap-2 items-center justify-center mt-4'>
                     {icons.map((icon, index) => (
                        <Link key={index} target='_blank' href={icon.url}>
                           <Image
                              src={'/images/' + icon.img + '.png'}
                              alt={icon.img}
                              className='w-full h-full cursor-pointer'
                              priority
                              width={60}
                              height={60}
                           />
                        </Link>
                     ))}
                  </div>
               </div>
            </div>

            <div className='mt-8'>
               {' '}
               <ChatComponent />
            </div>

<div
   className='relative bg-[#079117] w-full md:w-[580px] h-[50px] mt-16 flex items-center justify-center text-center cursor-pointer group'
   onClick={() => {
      navigator.clipboard.writeText('eJcxLfN96TyHAQpMfJQpVvMMWS9mgfM5Vfty9TDpump');
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
   }}
>
   <p className='text-[15px] md:text-[27px] z-10 font-bold tracking-wider text-black'>
      eJcxLfN96TyHAQpMfJQpVvMMWS9mgfM5Vfty9TDpump
   </p>

   {showCopied && (
      <div className='absolute top-[-45px] left-1/2 -translate-x-1/2 px-4 py-2 bg-black text-[#4AFF91] font-bold text-sm md:text-base rounded shadow-lg border border-[#4AFF91] z-50 animate-fade'>
         Contract copied!
      </div>
   )}
</div>

            <div id='about' className='flex flex-col gap-8 mt-24'>
               <p
                  data-text='About $KAWAI'
                  className='main-anim-text text-[42px] flex items-center justify-center leading-none'
               >
                  About $KAWAI
               </p>
            </div>
            <div className='flex flex-col md:flex-row w-full mt-4'>
               <div className='w-full md:w-1/2 flex flex-col  p-4'>
                  <div className='text-[3vw] sm:text-[15px] lg:text-[18px] xl:text-[20px] mx-auto md:mx-0 bg-[#022405] border border-[#03cd1b] rounded p-4 w-full max-w-[90%] text-white break-words h-[350px]'>
                     KAWAI is a cultural initiative offering a delicate
                     introduction to Japanese culture through the image of a
                     refined, playful young heroine and intelligent AI agents.
                     The project employs AI to adapt narratives and provide
                     personalized insights, fostering a deeper understanding of
                     Japanese traditions and contemporary trends. Special
                     emphasis is placed on psychological support and
                     self-discovery: through metaphorical stories and
                     interactive scenarios, KAWAI offers meditation and
                     relaxation techniques based on Japanese practices,
                     promoting emotional well-being and harmonious personal
                     development.
                  </div>
                  <div className='mt-8 mx-auto md:mx-0'>
                     <Link
                        href='https://pump.fun/coin/eJcxLfN96TyHAQpMfJQpVvMMWS9mgfM5Vfty9TDpump'
                        target='_blank'
                        className='relative bg-[#079117] text-white text-[28px] px-10 py-0.5 transition border-2 border-transparent 
                        before:absolute before:inset-0 before:border-2 before:border-[#00c817] before:blur-sm before:opacity-0 
                        hover:before:opacity-100 hover:bg-[#00c817]'
                     >
                        Buy $KAWAI
                     </Link>
                  </div>
               </div>

               <div className='w-full md:w-1/2 flex mt-4 justify-center'>
                  <Image
                     src='/images/woman.gif'
                     alt='main'
                     className='w-full max-h-[500px] object-contain'
                     priority
                     width={600}
                     height={600}
                  />
               </div>
            </div>

            <div id='tokenomics' className='w-full mt-24 flex flex-col '>
               <h2
                  data-text='Tokenomics'
                  className='main-anim-text text-[48px] block mx-auto'
               >
                  Tokenomics
               </h2>

               <div className='flex flex-col lg:flex-row gap-8 mt-4'>
                  <Image
                     src='/images/girlDancing.gif'
                     alt='main'
                     className='w-full max-h-[500px] object-contain'
                     priority
                     width={600}
                     height={600}
                  />
                  <div className='mx-auto bg-[#022405] border border-[#03cd1b] rounded p-4 w-full max-w-[90%] text-white break-words h-[350px]'>
                     <div class='flex flex-col items-center justify-center text-white space-y-2'>
                        <div class='text-xl md:text-3xl font-semibold'>
                           1 BILLION SUPPLY
                        </div>
                        <div class='text-md md:text-xl'>
                           Total supply is capped at 1 billion tokens.
                        </div>

                        <div class='text-xl md:text-3xl  font-semibold'>
                           MINT REVOKED
                        </div>
                        <div class='text-md md:text-xl'>
                           Minting of new tokens has been permanently revoked.
                        </div>

                        <div class='text-xl md:text-3xl  font-semibold'>
                           0% TAXES
                        </div>
                        <div class='text-md md:text-xl'>
                           No tax on transactions, making it tax-friendly.
                        </div>

                        <div class='text-xl md:text-3xl  font-semibold'>
                           LP BURNED
                        </div>
                        <div class='text-md md:text-xl'>
                           Liquidity pool tokens have been burned for security.
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className='w-full mt-24 flex flex-col lg:flex-row gap-4'>
               {/* Левая часть с текстом */}
               <div className='w-full lg:w-1/2 text-center p-6 mx-auto lg:mx-0'>
                  <h2
                     id='how-to-buy'
                     data-text='How to buy $KAWAI'
                     className='main-anim-text text-3xl md:text-5xl font-bold text-white'
                  >
                     How to buy $KAWAI
                     {/* <span className='text-[40px]'>$</span> */}
                  </h2>
                  <p className='text-[23px] text-white mt-4  font-normal'>
                     Setting Up a Phantom Wallet First, choose and install the
                     Phantom wallet. Once installed, create your wallet and
                     securely store your private key or seed phrase.
                     <br />
                     <br />
                     Acquiring Solana (SOL): Purchase SOL from a cryptocurrency
                     exchange like Coinbase or Binance. After purchasing,
                     transfer the SOL to your Solana wallet.
                     <br />
                     <br />
                     Exchanging for $KAWAI on Pumpswap: Visit Pumpswap and
                     connect your Phantom wallet. Use the swap feature on
                     Pumpswap to exchange your SOL for $KAWAI tokens.
                  </p>

                  {/* Кнопки */}
                  <div className='mt-6 flex flex-col sm:flex-row gap-4 justify-center'>
                     <Link
                        href='https://phantom.app/'
                        target='_blank'
                        className='relative bg-[#079117] text-white text-[28px] px-10 py-0.5 transition border-2 border-transparent 
                        before:absolute before:inset-0 before:border-2 before:border-[#00c817] before:blur-sm before:opacity-0 
                        hover:before:opacity-100 hover:bg-[#00c817]'
                     >
                        Get Phantom
                     </Link>
                     <Link
                        href='https://pump.fun/coin/eJcxLfN96TyHAQpMfJQpVvMMWS9mgfM5Vfty9TDpump'
                        target='_blank'
                        className='relative bg-[#079117] text-white text-[28px] px-10 py-0.5 transition border-2 border-transparent 
                        before:absolute before:inset-0 before:border-2 before:border-[#00c817] before:blur-sm before:opacity-0 
                        hover:before:opacity-100 hover:bg-[#00c817]'
                     >
                        Go Pumpswap
                     </Link>
                  </div>
               </div>

               <div className='flex justify-center'>
                  <Image
                     src='/images/4.jpg'
                     alt='Wallet Setup'
                     width={1000}
                     height={1000}
                     className='rounded-lg shadow-lg object-cover w-[500px] h-full'
                     priority
                  />
               </div>
            </div>

            <div className='mt-24 w-screen bg-black border-t border-green-900 overflow-x-hidden '>
               <Footer />
            </div>
         </div>
      </div>
   );
}
