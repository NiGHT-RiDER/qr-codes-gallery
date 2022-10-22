import { NextPage } from "next";
import React from "react";
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

interface Props {
  imgSrc: string;
  name: string;
  link: string;
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const GalleryImage: NextPage<Props> = (props) => {
  return (
    <a href={props.link} className="inline-flex justify-center items-center p-5 text-base font-medium text-gray-500 bg-gray-200 rounded-lg hover:text-gray-100 hover:bg-gray-400 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
      <span className="w-full">{props.name}</span>
    </a>
  );
}
