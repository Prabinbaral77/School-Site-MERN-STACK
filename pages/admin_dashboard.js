import Footer from "../components/Footer"
import Navigations from "../components/Navigations"
import NoticeTable from "../components/NoticeTable"
import SideBar from "../components/SideBar"

function admin_dashboard() {
    return (
        <div>
           <Navigations/>
           <div className="flex">
            <SideBar />
            <NoticeTable />
           </div>
           <Footer />
        </div>
    )
}

export default admin_dashboard
