import Link from 'next/link'
import {useState} from 'react';

function NoticeForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [noticeType, setNoticeType] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()

        const noticeData = {
            title,
            description,
            noticeType,
            date: new Date(Date.now())
        }
        props.onAddNotice(noticeData);
    }

    return (
        <div className="flex justify-center">
            <form className="flex flex-col space-y-5" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="text" className="InputLabel">Notice Title: </label>
                    <input  
                       type="text"
                       id="text" required 
                       className="LoginInput ml-8" 
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div> 
                    <label htmlFor="password" className="InputLabel">Description: </label>
                    <textarea 
                        rows="5" 
                        className="LoginInput ml-8" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="type" className="InputLabel">Type</label>
                    <select name="type" id="type" className="LoginInput ml-24" value={noticeType} onChange={(e) => setNoticeType(e.target.value)}>
                        <option>Select type</option>
                        <option value="General Notice">General Notice</option>
                        <option value="Exam Notice">Exam Notice</option>
                        <option value="Admission Notice">Admission Notice</option>
                    </select>
                </div>
                <div className="flex">
                   <button type="submit" className="mx-auto px-7 py-3 bg-blue-600 text-xl font-semibold text-white rounded-full w-40 shadow-xl hover:bg-blue-400 active:scale-90 transition transform duration-150">Add</button>
                   <button type="cancel" className="mx-auto px-7 py-3 bg-red-600 text-xl font-semibold text-white rounded-full w-40 shadow-xl hover:bg-red-400 active:scale-90 transition transform duration-150"><Link href="/admin_dashboard">Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}

export default NoticeForm

