import { promises as fs } from 'fs'
import path from 'path'
import React from 'react';
import Gallery from '@/components/gallery';

const GalleryPage = async () => {
    const imageDirectory = path.join(process.cwd(), '/public/photos/a7c/flowers');
    const imageFilenames = await fs.readdir(imageDirectory)
    console.log(imageFilenames)
    return (
        <div>
            <div className="bg-cover w-screen h-screen"
                style={{
                    backgroundImage: `url('/000008770013.jpg')`,
                }}>

            </div>
            <div className="flex-col gap-1 bg-slate-50 bg-no-repeat bg-fixed
    bg-center bg-cover overflow-auto">
                <h1 className='w-full text-7xl font-serif text-black text-center mt-16 mb-28'>
                    Flowers
                </h1>
                <Gallery images={imageFilenames} fil="a7c/flowers"/>
                <div className='w-full text-sm font-serif text-black text-center my-4'>
                © Hsu, Chun Yu
                </div>
            </div>

        </div>
    );
};

export default GalleryPage;
