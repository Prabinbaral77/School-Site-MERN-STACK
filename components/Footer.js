import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaCopyright } from 'react-icons/fa';

function Footer() {
    return (
        <div>
            <div className="bg-blue-900 grid grid-cols-1 gap-y-10 pt-10 text-center text-white md:grid md:grid-cols-2 lg:grid-cols-4 pb-8">
            <div className="font-semibold">
                <h2 className="font-bold pb-5 underline">SCHOOL INQUIRY</h2>
                <div className="space-y-1">
                    <p className="footerIcon">Infrastructure</p>
                    <p className="footerIcon">Photo Gallery</p>
                    <p className="footerIcon">Notices</p>
                    <p className="footerIcon">Contact Us</p>
                    <p className="footerIcon"><Link href="/login">Admin Login</Link></p>
                </div>
            </div>
            <div className="font-semibold">
                <h2 className="font-bold pb-5 underline">CONTACT US</h2>
                <div className="space-y-1">
                    <p className="footerIcon">Reception: +977-984654545</p>
                    <p className="footerIcon">Exam Section: +977-9846546556</p>
                    <p className="footerIcon">Email:ratanpandeyschool@gmail.com</p>
                    <p className="footerIcon">website:ratanpandey.edu.np</p>
                    <p className="footerIcon">Location: Pokhara-13, Arva</p>
                </div>
            </div>
            <div>
                <h2 className="font-bold pb-5 underline">IMPORTANT LINKS</h2>
                <div className="space-y-1"> 
                    <p className="footerIcon"><Link href="https://www.doe.gov.np/">जिल्ला शिक्षा कार्यालय</Link></p>
                    <p className="footerIcon"><Link href="https://www.doe.gov.np/">शिक्षा तथा मानवस्रोत विकास केन्द्र</Link></p>
                    <p className="footerIcon"><Link href="https://hd.gandaki.gov.np/">स्वास्थ्य तथा जनसंख्या मन्त्रालय</Link></p>
                    <p className="footerIcon"><Link href="https://daokaski.moha.gov.np/">जिल्ला प्रशासन कार्यालय, कास्की</Link></p>
                </div>
            </div>
            <div>
                <h2 className="pb-5 font-bold underline">SOCIAL SITE</h2>
                <div className="flex space-x-8 justify-center">
                    <FaFacebook className="text-4xl cursor-pointer hover:scale-125 transition transform duration-100 hover:text-blue-600" />
                    <FaInstagram className="text-4xl cursor-pointer hover:scale-125 transition transform duration-100 hover:text-red-400"/>
                    <FaTwitter className="text-4xl cursor-pointer hover:scale-125 transition transform duration-100 hover:text-blue-700"/>
                </div>
            </div>
          </div>
          <div>
              <p className="flex bg-black text-white items-center font-semibold justify-center">
                  <FaCopyright className="text-white"/>
                  <p className="md:pr-4">{new Date().getFullYear()}</p>
                  <p> SHREE RATAN PANDEY SECONDARY SCHOOL.</p>
                  <p>Powered by <Link href="https://www.facebook.com/prabin.brll" target="_blank" >"PRABIN BARAL"</Link></p>
              </p>
          </div>
        </div>
    )
}

export default Footer
