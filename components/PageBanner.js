import Image from 'next/image'
import Link from 'next/link'

function PageBanner({BannerTitle}) {
    return (
        <div className="relative">
          <div className="relative h-[150px] md:h-[200px] lg:h-[280px]">
              <Image src="https://images.unsplash.com/photo-1568301956237-25a54f5f0d21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
              layout="fill"
              objectFit="cover"/>
          </div>
          <div className="absolute top-4 left-1/4 lg:left-2/4 text-xs font-bold">Shree Ratan Pandey Secondary School</div>
          <div className="absolute top-16 left-16 flex text-3xl lg:text-5xl lg:top-32 lg:left-36">
              <h3 className="font-bold cursor-pointer"><Link href="/">Home</Link>/</h3>
              <p className="font-semibold cursor cursor-pointer text-gray-900 capitalize">{BannerTitle}</p>
          </div>
        </div>
    )
}

export default PageBanner
