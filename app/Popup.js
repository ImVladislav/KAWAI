import { useRef, useState } from 'react';
import ScrambleText from './TextAnim';

const Popup = ({ setIsPlayMusic }) => {
   const [isOpen, setIsOpen] = useState(true);

   const handleClick = () => {
      setIsPlayMusic(true);
      setIsOpen(false);
   };

   return (
      isOpen && (
         <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[20px] flex justify-center items-center z-[100]'>
            <div className='text-center'>
               {/* Кнопка для взаимодействия */}
               <div
                  className="relative bg-[#079117] text-white px-10 py-0.5 transition border-2 border-transparent 
                  before:absolute before:inset-0 before:border-2 before:border-[#00c817] before:blur-sm before:opacity-0 
                  hover:before:opacity-100 hover:bg-[#00c817] cursor-pointer"
                  onClick={handleClick}
               >
                  <ScrambleText />
                  {/* <h1 className='text-anim text-2xl md:text-5xl font-extrabold'>
                     CLICK TO ENTER $KAWAI
                  </h1> */}
               </div>
            </div>
         </div>
      )
   );
};

export default Popup;
