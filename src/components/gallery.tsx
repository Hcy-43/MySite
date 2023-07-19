import React from 'react';
import Image from 'next/image'

const Gallery = ({ images, fil }: { images: Array<string>; fil:string }) => {
    return <div className='flex gap-x-8 gap-y-4 flex-row flex-wrap align-start justify-center'>
        {images.map((el: string) => el !== ".DS_Store" ?
            <div className='transition ease-in-out delay-0 hover:-translate-y-5 hover:scale-105 duration-300 mx-2 my-2 rounded-2xl w-96 h-64 bg-slate-100 relative overflow-hidden'>
                <Image fill alt={'alt'} src={`/photos/${fil}/${el}`} key={el} />
            </div>:<></>)}
    </div>
}

export default Gallery;