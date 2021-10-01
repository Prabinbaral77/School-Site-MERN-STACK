import AdminTeamsList from "../components/AdminTeamsList"
import Footer from "../components/Footer"
import Navigations from "../components/Navigations"
import SideBar from "../components/SideBar"
import {MongoClient} from 'mongodb';

function adminTeam(props) {
    return (
        <div>
           <Navigations/>
           <div className="flex">
            <SideBar />
            <AdminTeamsList members={props.members} />
           </div>
           <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://PrabinBaral:2y1FDf1ZgdxBJCcF@cluster0.aptdm.mongodb.net/school?retryWrites=true&w=majority');
    const db = client.db();
    const membersCollection = db.collection('members');
    const members = await membersCollection.find().toArray();
    client.close();
    return {
        props: {
            members: members.map(member => ({
                name: member.name,
                position: member.position,
                qualification: member.qualification,
                image: member.image,
                phoneNo: member.phoneNo,
            }))
        },
    revalidate: 10
    }
}

export default adminTeam
