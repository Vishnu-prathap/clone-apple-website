"use client";
import { Image } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";
export default function Products() {
  const productDetails = [
    {
      key: "1",
      name: "watch-ultra-2",
      headerImage:
        "https://www.apple.com/v/home/bi/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_medium.png",
      text: "Next level adventure.",
      productImage:
        "https://www.apple.com/v/home/bi/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_order__dyxqj5ia98om_medium.jpg",
    },
    {
      key: "2",
      name: "watch-ultra-2",
      headerImage:
        "https://www.apple.com/v/home/bi/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_medium.png",
      text: "Next level adventure",
      productImage:
        "https://www.apple.com/v/home/bi/images/promos/apple-watch-ultra-2/promo_apple_watch_ultra2_order__dyxqj5ia98om_medium.jpg",
    },
  ];
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row gap-x-4'>
        {productDetails.map((items, i) => {
          return (
            <div
              key={items.key}
              className={`flex flex-col justify-center items-center `}
              style={{
                backgroundImage: `url(${items.productImage})`,
                width: "100px",
                height: "100px",
              }}>
              <Image src={items.headerImage} alt={items.name} width={100} />
              <p>{items.text}</p>
              <div className='flex flex-row gap-x-4'>
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
              <Image src={items.productImage} alt={items.name} width={800} />
            </div>
          );
        })}
      </div>
      <div className='flex flex-row'>123</div>
    </div>
  );
}
