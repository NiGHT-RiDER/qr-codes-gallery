import { NextPage } from "next";
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  imgSrc: string;
  name: string;
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const GalleryImage: NextPage<Props> = (props) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href="#" className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={props.imgSrc}
          layout="fill"
          objectFit="contain"
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-100'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <p className="mt-1 text-lg font-medium text-gray-900">{props.name}</p>
    </a>
  );
}

git remote add origin https://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@github.com/NiGHT-RiDER/qr-codes-gallery.git