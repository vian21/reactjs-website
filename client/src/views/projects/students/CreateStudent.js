import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

export default function CreateStudent() {

    const history = useHistory();

    const name = useRef()
    const grade = useRef()
    const DOB = useRef()
    const gender = useRef()

    async function create(event) {
        event.preventDefault();
        const res = await fetch(`http://localhost:5000/students/create`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.current.value,
                grade: grade.current.value,
                DOB: DOB.current.value,
                gender: gender.current.value,
            })
        })
        const data = await res.json()
        if (data.message == 'ok') {
            history.goBack()
        } else {
            alert("Failed to create student!")
        }

    }

    return <div className="main">
        <center><h1 className="p-3 text-3xl">New Student</h1></center>
        <form className="w-4/5" onSubmit={create}>

            <h4 className="font-semibold">Name</h4>
            <input type="text" id="name"
                ref={name}
                className=" w-full p-3 border-solid border-2 border-grey-300" /><br /><br />

            <h4 className="font-semibold">Grade</h4>
            <input type="text" id="grade"
                ref={grade}
                className=" w-full p-3 border-solid border-2 border-grey-300" /><br /><br />

            <h4 className="font-semibold">DOB</h4>
            <input type="date" id="DOB"
                ref={DOB}
                className=" w-full p-3 border-solid border-2 border-grey-300" /><br /><br />

            <h4 className="font-semibold">DOB</h4>
            <select id="gender"
                ref={gender}
                className=" w-full p-3 border-solid border-2 border-grey-300">
                {window.genders.map((gender, index) => (
                    <option key={index} value={index}>{gender}</option>
                ))}
            </select><br /><br />

            <button

                className="p-3 text-white bg-blue-400 mr-3 w-full"
            >Create</button>

        </form>
    </div>
}