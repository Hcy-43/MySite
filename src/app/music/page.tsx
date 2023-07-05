import Image from 'next/image'
import Head from 'next/head';
import Tilt from "react-parallax-tilt";
import Link from 'next/link';
// bg-[url('/img/hero-pattern.svg')]
export default function Home() {
    return (
        <div>
            <div className="flex w-screen h-screen">
                <Image
                    src="/000008770013.jpg"
                    fill
                    alt="Pigeon"
                ></Image>
            </div>
            <div className="flex bg-gray-950 w-screen h-screen">
                
            </div>

        </div>
    )
}
