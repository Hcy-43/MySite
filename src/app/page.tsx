import Image from 'next/image'
import Head from 'next/head';
import styles from './Home.module.css';
import Tilt from "react-parallax-tilt";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          Welcome to Michael's website.
        </div>
      </div>
      <div className={styles.whatContainer}>
        <div className={styles.whatTitleContainer}>
          <h1 className="font-serif text-8xl p-3 italic">Hobbies</h1>
        </div>
        <div className="flex flex-row min-w-full h-full justify-center">
          <Link href="/photography" className="transition ease-in-out delay-0 hover:-translate-y-5 hover:scale-105 duration-300 flex flex-col justify-start mx-12 my-12 basis-1/4 rounded-2xl relative overflow-hidden">
            <div className='grow relative overflow-hidden'>
              <Image
                src="/../public/IMG_6033.JPG"
                fill
                style={{ objectFit: 'cover', }}
                alt="Picture of the author"
              >
              </Image>
            </div>
            <div className="font-serif  text-5xl p-3 bg-gray-400 opacity-80">Photography</div>
          </Link>
          <Link href="/translate" className="transition ease-in-out delay-0 hover:-translate-y-5 hover:scale-105 duration-300 flex flex-col justify-start mx-12 my-12 basis-1/4 rounded-2xl relative overflow-hidden">
            <div className='grow relative overflow-hidden'>
              <Image
                src="/../public/IMG_1777.JPG"
                fill
                style={{ objectFit: 'cover', }}
                alt="Picture of the author"
              >
              </Image>
            </div>
            <div className="font-serif  text-5xl p-3 bg-gray-400 opacity-80">Song Translation</div>
          </Link>
          <Link href="/music" className="transition ease-in-out delay-0 hover:-translate-y-5 hover:scale-105 duration-300 flex flex-col justify-start mx-12 my-12 basis-1/4 rounded-2xl relative overflow-hidden">
            <div className='grow relative overflow-hidden'>
              <Image
                src="/../public/2.jpg"
                fill
                style={{ objectFit: 'cover', }}
                alt="Picture of the author"
              >
              </Image>
            </div>
            <div className="font-serif  text-5xl p-3 bg-gray-400 opacity-80">Music</div>
          </Link>

        </div>
      </div>
    </div>
  )
}
