import React from 'react';
import imagesDb from '../db';
import CommutyLogo from './CommutyLogo';
import { GalleryImage } from './GalleryImage';
import ThemeToggler from './ThemeToggler';

export default function Gallery() {
    return (
        <div className="pt-6 mt-8">
            <ThemeToggler />
            <div className="flex justify-center items-center flex-col ">
                <CommutyLogo />
                <div className="grid grid-cols-2 py-8 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
                    {
                        imagesDb.map(image => {
                            return <GalleryImage imgSrc={image.imgSrc} name={image.name} key={image.name} link={image.link} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}