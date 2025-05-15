import Link from 'next/link';
import { icons } from './page';
import Image from 'next/image';

export const Footer = () => {
   return (
      <div className='py-8 flex flex-col items-center justify-center'>
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
         <div className='text-2xl mt-2'>$KAWAI 2025 © Copyrights reserved</div>
      </div>
   );
};
