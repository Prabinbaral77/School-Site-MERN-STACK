import Navigations from "../components/Navigations"
import Footer from "../components/Footer"
import PageBanner from "../components/PageBanner"
import News from "../components/News"

function notices() {
    return (
        <div className="min-h-screen overflow-hidden">
            <Navigations />

            <main className="">
                <PageBanner BannerTitle="notices" />
                <div className="lg:max-w-6xl flex flex-col items-center shadow-md lg:ml-[150px] xl:ml-[300px]">
                    <h2 className="my-10 text-center text-2xl font-semibold underline">Latest News and Notices</h2>
                    <News />
                    <News />
                    <News />
                    <News />
                </div>
            </main>

            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default notices
