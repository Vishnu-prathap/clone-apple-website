import { Image } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
export default function SecondImage() {
  return (
    <div className="bg-[url('https://www.apple.com/v/home/bi/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_medium.jpg')] h-[800px] w-full bg-cover bg-center flex flex-col justify-start items-center pt-20 font-sans mt-4">
      <p className=' font-bold text-5xl pt-10'>iPhone 15 </p>
      <p className=' text-2xl pt-2'>New camera. New design. Newphoria.</p>
      <div className='flex flex-row gap-x-6 pt-2 text-xl'>
        <a
          href='#'
          className='text-blue-600 font-semibold flex flex-row items-center justify-center hover:underline'>
          Learn More <IoIosArrowForward />
        </a>
        <a
          href='#'
          className='text-blue-600 font-semibold  flex flex-row items-center justify-center hover:underline'>
          Buy <IoIosArrowForward />
        </a>
      </div>
      <p></p>
    </div>
  );
}
