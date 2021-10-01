import { InformationCircleIcon, UsersIcon, ChatAltIcon } from '@heroicons/react/solid'
import Link from 'next/link';


function SideBar() {
    return (
        <div className="w-[300px] bg-black text-white">
            <div className="font-bold p-4 border-b-2">Welcome Admin,</div>
            <div className="cursor-pointer font-semibold p-6 border-b-2 flex">
                <InformationCircleIcon className="h-6" />
                <p className="pl-6 hover:text-blue-400 active:scale-105"><Link href="/admin_dashboard">Notices</Link></p>
            </div>
            <div className="cursor-pointer font-semibold p-6 border-b-2 flex">
                <UsersIcon  className="h-6" />
                <p className="pl-6"><Link href="/adminTeam">Teams</Link></p>
            </div>
            <div className="cursor-pointer font-semibold p-6 border-b-2 flex pb-[540px]">
                <ChatAltIcon className="h-6" />
                <p className="pl-6"><Link href="/adminFeedback">Feedback</Link></p>
            </div>
        </div>
    )
}

export default SideBar
