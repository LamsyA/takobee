import Image from "next/image"


const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-200 to-emerald-600
    dark:from-slate-300 dark:to-slate-500 rounded-lg
    mb-8">
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row
        items-center justify-evenly">
            <div className="text-center mb-8 md:mb-0"> 
                <h1 className=" text-4xl md:text-6xl font-bold
                text-white mb-4"> New Year Sale</h1>
                <p className="text-lg md:text-xl text-white mb-2">Enjoy discount on all products</p>
                <p className="text-2xl md:text-5xl text-yellow-300 dark:text-lime-400 font-bold
                  animate-pulse">Up to 20% OFF</p>
            </div>
            <div className="w-1/3 relative aspect-video">
              <Image
                src="/hero.png" alt="hero image" fill
                className="object-contain"/>
            </div>
        </div>
    </div>
  )
}

export default Hero