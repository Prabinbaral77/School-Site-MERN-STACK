import { BellIcon} from '@heroicons/react/solid'

function News() {
    return (
        <div className="flex mx-6 uppercase border p-5 bg-gray-100 cursor-pointer shadow-lg hover:bg-gray-200 mb-7 hover:scale-95 hover:shadow-2xl transition transform duration-150 ease-out">
            <div className="">
                <p className="font-semibold text-gray-600">General Notice</p>
                <p className="text-blue-500 font-semibold">Course registration and exam form notice</p>
                <p className="text-gray-700 text-xs">~january 12,2021</p>
            </div>
            <div className="pl-16 md:pl-[250px] lg:pl-[450px]"> 
              <BellIcon className="h-9 text-blue-500 hover:scale-110" />
            </div>
        </div>
    )
}

export default News
