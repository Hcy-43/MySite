import { promises as fs } from 'fs'
import path from 'path'
import React from 'react';
import Image from 'next/image'
import Gallery from '@/components/gallery';
import Link from 'next/link';
// import styles from '../page.module.css'

// const { container, main, title, grid, card } = styles

// using process.cwd() to get the path
// fs.readdir to get all files in directory
const photoHome = () => {

    return (
        <div className='overflow-scroll'>
            <div className="bg-cover w-screen h-screen"
                style={{
                    backgroundImage: `url('/000008770013.jpg')`,
                }}>
                    
            </div>
            <Link href="/photography/a7c">
                <div className="flex-col gap-1 bg-gray-900 w-screen h-screen bg-no-repeat bg-fixed
    bg-center bg-cover overflow-scroll text-9xl text-center">
                    Digital
                </div>
            </Link>
            <Link href="/photography/film">
                <div className="flex-col gap-1 bg-gray-900 w-screen h-screen bg-no-repeat bg-fixed
    bg-center bg-cover overflow-scroll text-9xl text-center">
                    Film
                </div>
            </Link>
        </div>
    );
};

export default photoHome;