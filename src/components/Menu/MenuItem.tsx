import React from "react";
import Image from "next/image";

type MenuProps = {
  imgSrc: string;
  name: string;
  description: string;
  price: number;
};

type MenuItemPops = {
  index: number;
  item: MenuProps;
};

export default function MenuItem({ index, item }: MenuItemPops) {
  return (
    <li key={index} className="flex items-center gap-4">
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image
          src={item.imgSrc}
          alt=""
          fill
          priority
          quality={100}
          sizes="(max-width: 1280px) 60px, 72px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-between gap-4 items-baseline">
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {item.name}
          </p>
          <div className="flex-1 border-b border-dashed  border-primary"></div>
          <p className="leading-none font-primary font-semibold text-[30px] text-primary">
            {item.price.toFixed(2)}
          </p>
        </div>
        <p>{item.description}</p>
      </div>
    </li>
  );
}
