import {useState} from 'react';

function ContactusForm(props) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            subject,
            message,
            date: new Date(Date.now())
        }
        props.onAddContact(data);
    }
    return (
        <div>
            <form className="flex flex-col text-center space-y-4 my-4 shadow-xs" onSubmit={submitHandler}>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="name" 
                    className="FeedbackInput" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>

                <input 
                    type="text" 
                    id="email" 
                    placeholder="email" 
                    className="FeedbackInput" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>

                <input 
                    type="text" 
                    id="subject" 
                    placeholder="subject" 
                    className="FeedbackInput" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)}/>

                <textarea 
                    type="textarea" 
                    id="message" 
                    placeholder="message" 
                    rows="4" 
                    className="FeedbackInput h-20" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit" className="mx-auto px-8 py-3 bg-blue-500 rounded-xl text-white font-semibold hover:bg-blue-700 shadow-xl hover:shadow-2xl active:scale-95" >Submit</button>
            </form>
        </div>
    )
}

export default ContactusForm
