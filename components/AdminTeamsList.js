import TeamCard from './TeamCard'
import Link from 'next/link';

function AdminTeamsList({members}) {
    return (
        <div>
            <h2 className="text-3xl underline font-semibold ml-20 my-10 text-blue-700">Teams</h2>
            <h2 className="p-8 cursor-pointer text-xl font-semibold"><Link href="/newMemberForm">Add Team Member</Link></h2>
           <div className="space-y-5 flex flex-col">

            {members.map(member => (
                <div className="flex">
                    <TeamCard 
                        key={member._id}
                        img={member.image}
                        name={member.name}
                        position={member.position}
                        qualification={member.qualification}
                        phoneNo={member.phoneNo}/>
                    <button className=" items-center px-8 cursor-pointer rounded-full h-12 mt-[120px] ml-10 text-white font-semibold bg-red-400 hover:scale-95 hover:bg-red-600 shadow-md transition transform duration-150">Delete</button>
                </div>
            ))}

           </div>
        </div>
    )
}

export default AdminTeamsList