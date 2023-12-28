import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FaApple } from "react-icons/fa";
import Store from "./components/home/navbar/Store";
import Mac from "./components/home/navbar/Mac";
import Ipad from "./components/home/navbar/Ipad";
import Iphone from "./components/home/navbar/Iphone";
import Watch from "./components/home/navbar/Watch";
import Airpods from "./components/home/navbar/Airpods";
import Tv from "./components/home/navbar/Tv";
import Entertainment from "./components/home/navbar/Entertainment";
import { IoSearch } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className='flex flex-row text-xs gap-x-10 w-full justify-center items-center py-2 bg-gray-900 text-slate-100 h-10'>
      <Button isIconOnly href='/'>
        <FaApple width={50} height={50} />
      </Button>
      <Store />
      <Mac />
      <Ipad />
      <Iphone />
      <Watch />

      <Button>Vision</Button>
      <Airpods />
      <Tv />
      <Entertainment />
      <Button isIconOnly>
        <IoSearch className='w-4 h-4' />
      </Button>
      <Button isIconOnly>
        <IoBagOutline className='w-4 h-4' />
      </Button>
    </div>
  );
}
