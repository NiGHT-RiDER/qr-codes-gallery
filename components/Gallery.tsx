import React, { useState } from 'react';
import imagesDb from '../db';
import CommutyLogo from './CommutyLogo';
import DesksFilter from './DesksFilter';
import { GalleryImage } from './GalleryImage';
import ThemeToggler from './ThemeToggler';

export default function Gallery() {
    const [searchedDesk, setsearchedDesk] = useState("")
    return (
        <div className="pt-6 mt-8">
            <ThemeToggler />
            <div className="flex justify-center items-center flex-col ">
                <CommutyLogo />
                <div className='w-3/5 lg:w-4/5'>
                    <div className='w-full'>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" value={searchedDesk} onChange={event => setsearchedDesk(event.target.value)} id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search desks" required />
                            <button type="submit" onClick={x => setsearchedDesk("")} class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Clear</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 py-8 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
                    {
                        imagesDb.filter(f => f.name.includes(searchedDesk) || searchedDesk === '').map(image => {
                            return <GalleryImage imgSrc={image.imgSrc} name={image.name} key={image.name} link={image.link} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}