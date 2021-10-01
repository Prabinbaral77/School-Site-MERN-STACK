import {useRouter} from 'next/router';
import Navigations from "../components/Navigations"
import Footer from "../components/Footer"
import PageBanner from "../components/PageBanner"
import NoticeForm from "../components/NoticeForm"

function newNoticeForm() {

    const router = useRouter()
    const addNoticeHandler = async(enteredNoticeData) => {
        const response = await fetch('/api/newNoticeForm', {
            method: 'POST',
            body:JSON.stringify(enteredNoticeData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        router.push('/admin_dashboard');
    }
    return (
        <div className="min-h-screen overflow-hidden">
            <Navigations />

            <main className="mb-10">
                <PageBanner BannerTitle="Add new Notices" />
                <div className="">
                    <h2 className="my-10 text-center text-2xl font-semibold underline">Add New Notices</h2>
                </div>
                <NoticeForm onAddNotice={addNoticeHandler} />
            </main>

            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default newNoticeForm

