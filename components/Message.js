import Image from 'next/image'

function Message() {
    return (
        <div className="mb-20">
            <div className="text-3xl font-bold my-4 flex justify-center mb-8"> 
                <p className="border-b-4 text-blue-400">Message from Principle</p>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="relative h-[300px] min-w-[300px] mx-[170px] mb-4 md:mx-[70px]">
                    <Image src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl hover:scale-95 transition transform duration-150"/>
                </div>
                <div className="mx-8 px-4 font-semibold text-gray-600 flex-grow lg:text-xl md:pt-16 shadow-lg"> 
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quasi labore sapiente ex nam, provident, molestias quaerat quas sunt quo consequatur architecto corporis itaque pariatur deserunt dolores quisquam dolor harum dignissimos repellendus alias natus placeat, eos repellat? Aut officiis atque debitis iusto consequuntur, culpa, dignissimos tenetur hic sapiente dolorem eaque, molestias quidem doloremque quo totam eos modi? Velit laboriosam dolorum mollitia sed expedita deleniti illo voluptatum nam quaerat! Unde, dolore fuga. Vel quo fugiat praesentium aliquam cupiditate esse hic, repudiandae nobis earum quis fuga aliquid qui facilis accusamus illo totam odit porro obcaecati error nulla et cum possimus! Quo, tempore!
                </div>
            </div>
        </div>
    )
}

export default Message
