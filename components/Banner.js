import Image from 'next/image'
import {useState} from 'react';

function Banner() {
    const [banner, setBanner] = useState(0);
    let number=0;
    banner==0 ? number=1 : number=0
    banner==1 ? number=2 : number=1
    setTimeout(() => {
        setBanner(number)
    }, 1000);

    const fadeImages = [
        {
            url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1122&q=80',
            caption: 'First Slide'
        },{
            url: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
            caption: 'Second Slide'
        },{
            url: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
            caption: 'Third Slide'
        }
    ]
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px]">
                <Image src={fadeImages[0].url} 
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
