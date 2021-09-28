import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
                <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1122&q=80" 
                  layout="fill"
                  objectFit="cover" />
               <div className="absolute top-16 left-16 font-semibold text-gray-700 md:top-[140px] md:text-2xl lg:text-5xl lg:top-[150px] lg:left-[300px]">
                   <p className="italic">Shree Ratan Pandey Secondary School</p>
                   <p className="">Pokhara-13, Arva</p>
               </div>
        </div>
    )
}

export default Banner
