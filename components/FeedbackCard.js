function FeedbackCard({feedbacks}) {
    return (
        <div>
            {feedbacks.map(feedback => (
                <div className="flex space-x-8 mb-10">
                    <div className="bg-gray-100 rounded-xl ml-4 w-[550px]">
                        <h2 className="p-4 text-xl text-blue-500 font-semibold">Name:{feedback.name}</h2>
                        <h3 className="pl-4 pb-3 text-xs text-blue-500 font-semibold">Email:{feedback.email}</h3>
                        <h4 className="pl-4 pb-3 text-xl text-black font-semibold">Subject:{feedback.subject}</h4>
                        <p className="pl-4 pb-3 text-xs text-gray-500 font-semibold">Messsage: {feedback.message}</p>
                    </div>
                    <button className=" items-center px-8 cursor-pointer rounded-full h-12 mt-16 text-white font-semibold bg-red-400 hover:scale-95 hover:bg-red-600 shadow-md transition transform duration-150">Delete</button>
                </div>
            ))} 
        </div>
    )
}

export default FeedbackCard
