import Navigations from "../components/Navigations"
import Footer from "../components/Footer"
import PageBanner from "../components/PageBanner"
import TeamCard from "../components/TeamCard"
import {MongoClient} from 'mongodb';

function Team({members}) {
    return (
        <div className="min-h-screen overflow-hidden">
            <Navigations />

            <main className="mb-10">
                <PageBanner BannerTitle="our teams" />
                <div className="">
                    <h2 className="my-10 text-center text-2xl font-semibold underline">Our Team</h2>
                </div>
                <div className="space-y-10 xl:grid xl:grid-cols-2 2xl:grid-cols-3 xl:space-y-0 xl:gap-y-10">
                    {members.map(member => (
                        <div>
                             <TeamCard 
                                    key={member._id}
                                    img={member.image}
                                    name={member.name}
                                    position={member.position}
                                    qualification={member.qualification}
                                    phoneNo={member.phoneNo}/>
                        </div>
                    ))}
                </div>
            </main>

            <div className="">
                <Footer />
            </div>
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

export default Team
