import Navigations from "../components/Navigations"
import Footer from "../components/Footer"
import PageBanner from "../components/PageBanner"
import Image from 'next/image';

function ContactUs() {
    return (
        <div className="overflow-hidden">
            <Navigations />

            <main className="">
                <PageBanner BannerTitle="contact us" />
                   <h2 className="text-center text-2xl font-semibold underline pb-4 text-blue-600">Contact Us</h2>
                   <div className="xl:grid grid-cols-2">
                        <div className="relative h-[200px]">
                            <div>
                                <Image src="/map.JPG"
                                        layout="fill"
                                        objectFit="contain"/>
                            </div>
                            <div className="absolute top-4 left-[185px] md:left-[360px] lg:left-[500px] xl:left-[460px] animate-bounce">
                                <p className=" text-red-500 font-semibold">ratanpandeyschool</p>
                                <p className="pl-10">📌</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-semibold uppercase underline my-5 xl:my-0">Send your Feedback</p>
                            <form className="flex flex-col text-center space-y-4 my-4 shadow-xs">
                                <input type="text" id="name" placeholder="name" className="FeedbackInput" />
                                <input type="text" id="email" placeholder="email" className="FeedbackInput" />
                                <input type="text" id="subject" placeholder="subject" className="FeedbackInput" />
                                <input type="textarea" id="message" placeholder="message" rows="4" className="FeedbackInput h-20" />
                                <button type="submit" className="mx-auto px-8 py-3 bg-blue-500 rounded-xl text-white font-semibold hover:bg-blue-700 shadow-xl hover:shadow-2xl active:scale-95" >Submit</button>
                            </form>
                        </div>
                   </div>
            </main>

            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default ContactUs
