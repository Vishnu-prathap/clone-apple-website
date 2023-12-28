"use client";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useState } from "react";

export default function Ipad() {
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
          iPad
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
              <p className='text-xs text-gray-400'>Explore Support</p>
              <p className='text-xl font-bold text-white'>iPhone</p>
              <p className='text-xl font-bold text-white'>Mac</p>
              <p className='text-xl font-bold text-white'>iPad</p>
              <p className='text-xl font-bold text-white'>Watch</p>
              <p className='text-xl font-bold text-white'>AirPods</p>
              <p className='text-xl font-bold text-white'>Music</p>
              <p className='text-xl font-bold text-white'>TV</p>
              <p className='text-xs text-white'>Explore Support</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <p className='text-xs text-gray-400'>Get Help</p>
              <p className='text-xs text-white'>Community</p>
              <p className='text-xs text-white'>Check Coverage</p>
              <p className='text-xs text-white'>Repair</p>
              <p className='text-xs text-white'>Contact Us</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <p className='text-xs text-gray-400'>Helpful Topics</p>
              <p className='text-xs text-white'>Get AppleCare+</p>
              <p className='text-xs text-white'>Apple ID & Password</p>
              <p className='text-xs text-white'>Billing & Subscriptions</p>
              <p className='text-xs text-white'>Find My</p>
              <p className='text-xs text-white'>Accessibility</p>
            </div>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
