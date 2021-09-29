import Image from 'next/image';

function TeamCard({img, name, position, qualification, phoneNo}) {
    return (
        <div className="ml-10 flex justify-center space-x-16 bg-gray-100 shadow-md hover:scale-95 hover:bg-gray-200 cursor-pointer rounded-xl transition transform duration-150 ease-out lg:p-16">
            <div className="relative h-52 w-52">
                <Image 
                src={img}
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-xl hover:scale-105"/>
            </div>
            <div className="pt-16">
                <p className="text-xl font-bold text-blue-500">{name}</p>
                <p className="text-sm font-semibold">Position:{position}</p>
                <p className="text-sm font-semibold">Qualification:{qualification}</p>
                <p className="text-sm font-semibold">{phoneNo}</p>
            </div>
        </div>
    )
}

export default TeamCard
