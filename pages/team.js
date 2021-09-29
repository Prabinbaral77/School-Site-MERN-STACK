import Navigations from "../components/Navigations"
import Footer from "../components/Footer"
import PageBanner from "../components/PageBanner"
import TeamCard from "../components/TeamCard"

function Team() {
    return (
        <div className="min-h-screen overflow-hidden">
            <Navigations />

            <main className="mb-10">
                <PageBanner BannerTitle="our teams" />
                <div className="">
                    <h2 className="my-10 text-center text-2xl font-semibold underline">Our Team</h2>
                </div>
                <div className="space-y-10 xl:grid xl:grid-cols-2 2xl:grid-cols-3 xl:space-y-0 xl:gap-y-10">
                    <TeamCard 
                        img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                        name="Prabin Baral"
                        position="HeadMaster"
                        qualification="phd"
                        phoneNo="9846868438"/>
                    <TeamCard 
                        img="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        name="Prabin Baral"
                        position="HeadMaster"
                        qualification="phd"
                        phoneNo="9846868438"/>
                    <TeamCard 
                        img="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        name="Prabin Baral"
                        position="HeadMaster"
                        qualification="phd"
                        phoneNo="9846868438"/>
                    <TeamCard 
                        img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
                        name="Prabin Baral"
                        position="HeadMaster"
                        qualification="phd"
                        phoneNo="9846868438"/>
                </div>
            </main>

            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default Team
