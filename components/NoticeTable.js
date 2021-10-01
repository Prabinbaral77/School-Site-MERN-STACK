import News from './News'
import Link from 'next/link';

function NoticeTable() {
    return (
        <div>
            <h2 className="text-3xl underline font-semibold ml-20 my-10 text-blue-700">Notices</h2>
            <h2 className="p-8 cursor-pointer text-xl font-semibold"><Link href="/newNoticeForm">Add Notices</Link></h2>
            <div className="flex">
                <News />
                <button className=" items-center px-8 cursor-pointer rounded-full h-12 mt-6 text-white font-semibold bg-red-400 hover:scale-95 hover:bg-red-600 shadow-md transition transform duration-150">Delete</button>
            </div>
            <div className="flex">
                <News />
                <button className=" items-center px-8 cursor-pointer rounded-full h-12 mt-6 text-white font-semibold bg-red-400 hover:scale-95 hover:bg-red-600 shadow-md transition transform duration-150">Delete</button>
            </div>
            <div className="flex">
                <News />
                <button className=" items-center px-8 cursor-pointer rounded-full h-12 mt-6 text-white font-semibold bg-red-400 hover:scale-95 hover:bg-red-600 shadow-md transition transform duration-150">Delete</button>
            </div>
        </div>
    )
}

export default NoticeTable
