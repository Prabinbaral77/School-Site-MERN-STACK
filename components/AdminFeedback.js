import FeedbackCard from './FeedbackCard';

function AdminFeedback(props) {
    return (
        <div>
            <h2 className="text-3xl underline font-semibold ml-20 my-10 text-blue-700">Feedback</h2>
            <div className="space-y-6 ml-10">

            <div className="">
                <FeedbackCard feedbacks={props.feedbacks} />
            </div>

            </div>
        </div>
    )
}



export default AdminFeedback