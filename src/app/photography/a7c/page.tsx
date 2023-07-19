import { promises as fs } from 'fs'
import path from 'path'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Gallery from '@/components/gallery';

const digitalPage = async () => {
    const imageDirectory = path.join(process.cwd(), '/public/photos/a7c');
    const imageFilenames = await fs.readdir(imageDirectory)
    console.log(imageFilenames)

    return (

        <div>
            <div className="bg-cover w-screen h-screen bg-scroll"
                style={{
                    backgroundImage: `url('/DSC06610.JPG')`,
                }}>
                <div className='flex gap-x-8 gap-y-4 flex-row flex-wrap min-w-full h-screen align-start justify-center'>
                    {imageFilenames.map((el: string) => el !== ".DS_Store" ?
                        <Link href={`/photography/a7c/${el}`} className="inline-block font-serif align-middle text-center mx-2 my-16 rounded-2xl w-96 h-64 text-6xl relative overflow-hidden bg-gray-300 hover:bg-gray-500 text-gray-700  hover:text-white py-2 px-4  hover:border-transparent rounded">
                            {el}
                        </Link>
                        : <>
                        </>)}
                </div>
            </div>

        </div>)

};

export default digitalPage;
