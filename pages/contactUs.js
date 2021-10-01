import {useRouter} from 'next/router';
import Navigations from "../components/Navigations"
import Footer from "../components/Footer"
import PageBanner from "../components/PageBanner"
import Image from 'next/image';
import ContactusForm from '../components/ContactusForm';

function contactUs() {
   
    const router = useRouter();
    const addFeedbackHandler = async(feedbackData) => {
        const response = await fetch('/api/contactUs', {
            method: 'POST',
            body: JSON.stringify(feedbackData),
            headers: { 'Content-Type': 'application/json'}
        })
        const result = await response.json();
        router.push('/');
    }
    return (
        <div className="overflow-hidden">
            <Navigations />

            <main className="">
                <PageBanner BannerTitle="contact us" />
                   <h2 className="text-center text-2xl font-semibold underline pb-4 text-blue-600">Contact Us</h2>
                   <div className="xl:grid grid-cols-2">
                        <div className="relative h-[200px]">
                                <Image src="/map.JPG"
                                        layout="fill"
                                        objectFit="contain"/>
                            <div className="absolute top-4 left-[185px] md:left-[360px] lg:left-[500px] xl:left-[460px] animate-bounce">
                                <p className=" text-red-500 font-semibold">ratanpandeyschool</p>
                                <p className="pl-10">📌</p>
                            </div> 
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-semibold uppercase underline my-5 xl:my-0">Send your Feedback</p>
                            <ContactusForm onAddContact={addFeedbackHandler} />
                        </div>
                   </div>
            </main>

            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default contactUs
