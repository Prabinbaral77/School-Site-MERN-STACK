import {useRef} from 'react';
import {PlusCircleIcon} from '@heroicons/react/solid'
import Link from 'next/link'

function MemberForm(props) {

    const nameInputRef = useRef();
    const positionInputRef = useRef();
    const qualificationInputRef = useRef();
    const phoneNoInputRef = useRef();
    const imageInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredPosition = positionInputRef.current.value;
        const enteredQualification = qualificationInputRef.current.value;
        const enteredPhoneNo = phoneNoInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const memberData = {
            name: enteredName,
            position: enteredPosition,
            qualification: enteredQualification,
            phoneNo: enteredPhoneNo,
            image: enteredImage,
        }
        props.onAddMember(memberData);
    }
    return (
        <div className="flex justify-center">
            <form className="flex flex-col space-y-5" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name" className="InputLabel">Name: </label>
                    <input type="text" id="name" required className="LoginInput ml-12" ref={nameInputRef} />
                </div>
                <div>
                    <label htmlFor="position" className="InputLabel">Position: </label>
                    <input type="text" id="position" required className="LoginInput ml-7" ref={positionInputRef} />
                </div>
                <div>
                    <label htmlFor="qualification" className="InputLabel">Qualification: </label>
                    <input type="text" id="qualification" required className="LoginInput ml-8" ref={qualificationInputRef} />
                </div>
                <div>
                    <label htmlFor="number" className="InputLabel">Phone Number: </label>
                    <input type="text" id="number" required className="LoginInput ml-3" ref={phoneNoInputRef} />
                </div>
                <div className="flex space-x-5">
                    <label className="InputLabel">Image URL: </label>
                    <input type="url" id="image" required  className="LoginInput" ref={imageInputRef} />
                </div>
                
                <div className="flex">
                   <button type="submit" className="mx-auto px-7 py-3 bg-blue-600 text-xl font-semibold text-white rounded-full w-40 shadow-xl hover:bg-blue-400 active:scale-90 transition transform duration-150">Add</button>
                   <button className="mx-auto px-7 py-3 bg-red-600 text-xl font-semibold text-white rounded-full w-40 shadow-xl hover:bg-red-400 active:scale-90 transition transform duration-150"><Link href="/adminTeam">Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}

export default MemberForm
