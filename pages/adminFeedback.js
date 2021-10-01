import AdminFeedback from "../components/AdminFeedback"
import Footer from "../components/Footer"
import Navigations from "../components/Navigations"
import SideBar from "../components/SideBar"
import {MongoClient} from 'mongodb'

function adminFeedback(props) {
    return (
        <div>
           <Navigations/>
           <div className="flex">
            <SideBar />
            <AdminFeedback feedbacks={props.feedbacks} />
           </div>
           <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://PrabinBaral:2y1FDf1ZgdxBJCcF@cluster0.aptdm.mongodb.net/school?retryWrites=true&w=majority');
    const db = client.db();
    const feedbackCollection = db.collection('feedbacks');
    const feedbacks = await feedbackCollection.find().toArray();
    client.close();
    return {
        props: {
            feedbacks: feedbacks.map(feedback => ({
                name: feedback.name,
                email: feedback.email,
                subject: feedback.subject,
                message: feedback.message,
                date: feedback.date,
            }))
        },
    revalidate: 10
    }
}

export default adminFeedback

