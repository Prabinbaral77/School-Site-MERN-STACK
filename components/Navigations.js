import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { PhoneIcon, ChatAltIcon} from '@heroicons/react/solid'

function Navigations() {
    return (
        <div>
            <div className="flex bg-black h-8 items-center justify-center font-semibold py-1 space-x-10 text-white text-sm">
                <p >Have any question?</p>
                <div className="flex space-x-2">
                    <PhoneIcon className="h-5"/>
                    <p>06105863</p>
                </div>
                <div className="flex space-x-2"> 
                    <ChatAltIcon className="h-5" />
                    <p>ratanpandeyschool@gmail.com</p>
                </div>
            </div>
            <div className="grid grid-cols-3 py-4 bg-blue-400">
            {/* school logo on left side */}
            <div className="relative flex items-center ml-6 xl:ml-20 h-7 w-7 rounded-xl cursor-pointer">
                <Image src="https://images.unsplash.com/photo-1587652990204-1671eeaac77e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=918&q=80" 
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                className="rounded-md"/>
            </div>
            {/* Navigations List on center side */}
            <div className="">
                <ul className="flex space-x-1 -ml-20 items-center font-semibold cursor-pointer md:gap-x-1 lg:space-x-[100px]">
                    <li className="hover:text-gray-700 active:border-b-2"><Link href="/">Home</Link></li>
                    <li className="hover:text-gray-700 pl-2 md:pl-8 active:border-b-2"><Link href="/notices">Notices</Link></li>
                    <li className="hover:text-gray-700 pl-2 md:pl-8 active:border-b-2"><Link href="/team">Team</Link></li>
                    <li className="hover:text-gray-700 pl-2 md:pl-8 active:border-b-2"><Link href="contactUs">Contact_us</Link></li>
                </ul>
            </div>
            {/* social site icon */}
            <div className="flex items-center justify-end text-gray-500 cursor-pointer mr-20 space-x-5">
              <p className="hidden lg:inline-flex text-black font-semibold">Follow us on:</p>
              <FaFacebook className="text-3xl hover:text-blue-600 hover:scale-110" />
              <FaInstagram className="text-3xl hover:text-red-600 hover:scale-110" />
              <FaTwitter className="text-3xl hover:text-blue-900 hover:scale-110" />
            </div>
        </div>
        </div>
    )
}

export default Navigations
