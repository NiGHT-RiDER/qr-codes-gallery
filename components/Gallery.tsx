import imagesDb from '../db'
import { GalleryImage } from './GalleryImage';

export default function Gallery() {
    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    imagesDb.map(image => {
                        return <GalleryImage imgSrc={image.imgSrc} name={image.name} key={image.name} />
                    })
                }
            </div>
        </div>
    );
}