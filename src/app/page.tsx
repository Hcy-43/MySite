import Image from 'next/image'
import styles from './Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-no-repeat bg-fixed
    bg-center bg-cover bg-[url('/DSC05844.jpg')]">
      <div className="flex flex-col justify-center items-center bg-no-repeat bg-fixed
    bg-center bg-cover w-full min-h-screen backdrop-blur-md ">
        <div className="m-px text-8xl text-center font-bold font-serif">
          Michael's website.
        </div>

      </div>
      <div className="flex flex-col justify-start items-center w-full min-h-screen h-px">
        <div className="flex flex-row justify-start items-start w-full h-40">
          <h1 className="font-serif text-8xl p-3 italic">Hobbies</h1>
        </div>
        <div className="flex flex-row min-w-full h-full justify-center">
          <Link href="/photography" className="transition ease-in-out delay-0 hover:-translate-y-5 hover:scale-105 duration-300 flex flex-col justify-start mx-12 my-12 basis-1/4 rounded-2xl relative overflow-hidden">
            <div className='grow relative overflow-hidden'>
              <Image
                src="/photos/IMG_6033.JPG"
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
                src="/IMG_1777.JPG"
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
                src="/2.jpg"
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
