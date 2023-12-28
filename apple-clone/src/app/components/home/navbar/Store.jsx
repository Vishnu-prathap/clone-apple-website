"use client";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";

export default function Store() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <DropdownTrigger>
        <Button
          variant='light'
          className='capitalize group'
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={toggleDropdown}>
          Store
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Dropdown Variants'
        className='w-full '
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}>
        <DropdownItem
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
          <div className='p-4 w-full bg-gray-900 flex flex-row gap-8'>
            <div className='flex flex-col gap-y-2'>
              <p className='text-xs text-gray-400'>Shop</p>
              <p className='text-xl font-bold text-white'>Shop the latest</p>
              <p className='text-xl font-bold text-white'>Mac</p>
              <p className='text-xl font-bold text-white'>iPad</p>
              <p className='text-xl font-bold text-white'>iPhone</p>
              <p className='text-xl font-bold text-white'>Apple Watch</p>
              <p className='text-xl font-bold text-white'>Accessories</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <p className='text-xs text-gray-400'>Quick Links</p>
              <p className='text-xs text-white'>Find a store</p>
              <p className='text-xs text-white'>Order status</p>
              <p className='text-xs text-white'>Apple trade in</p>
              <p className='text-xs text-white'>Financing</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <p className='text-xs text-gray-400'>Shop Special Stores</p>
              <p className='text-xs text-white'>Certified Refurbished</p>
              <p className='text-xs text-white'>Education</p>
              <p className='text-xs text-white'>Business</p>
              <p className='text-xs text-white'>Veterans and Military</p>
              <p className='text-xs text-white'>Government</p>
            </div>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
