import { Image } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
export default function Hero() {
  return (
    <div className="bg-[url('https://www.apple.com/v/home/bi/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_medium.jpg')] h-[800px] w-full bg-cover bg-center flex flex-col justify-start items-center pt-20">
      <p className='text-white font-bold text-5xl pt-10'>iPhone 15 Pro</p>
      <p className='text-white text-2xl pt-2'>
        Titanium. So strong. So light. So Pro.
      </p>
      <div className='flex flex-row gap-x-6 pt-2 text-xl'>
        <a
          href='#'
          className='text-blue-500 flex flex-row items-center justify-center hover:underline'>
          Learn More <IoIosArrowForward />
        </a>
        <a
          href='#'
          className='text-blue-500 flex flex-row items-center justify-center hover:underline'>
          Buy <IoIosArrowForward />
        </a>
      </div>
      <p></p>
    </div>
  );
}
