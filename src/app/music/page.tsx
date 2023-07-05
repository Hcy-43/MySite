import Image from 'next/image'
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
