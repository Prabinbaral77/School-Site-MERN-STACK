import {useRouter} from 'next/router'
import Navigations from "../components/Navigations"
import Footer from "../components/Footer"
import PageBanner from "../components/PageBanner"
import MemberForm from "../components/MemberForm"

function newMemberForm() {

    const router = useRouter()
    const addMemberHandler = async(enteredMemberData) => {
        const response = await fetch('/api/newMemberForm', {
            method: 'POST',
            body: JSON.stringify(enteredMemberData),
            headers: { 'Content-Type': 'application/json'}
        })
        const data = await response.json()
        router.push('/adminTeam');
    }
    return (
        <div className="min-h-screen overflow-hidden">
            <Navigations />

            <main className="mb-10">
                <PageBanner BannerTitle="Add new Member" />
                <div className="">
                    <h2 className="my-10 text-center text-2xl font-semibold underline">Add New Member</h2>
                </div>
                <MemberForm onAddMember={addMemberHandler} />
            </main>

            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default newMemberForm


