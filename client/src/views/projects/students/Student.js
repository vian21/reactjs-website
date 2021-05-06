import React, { useState, useEffect, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import moment from 'moment'

export default function Student() {
    const { id } = useParams()
    const history = useHistory();
    const [student, setStudent] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/students/${id}`)
            const data = await res.json()

            setStudent(data)
        }

        fetchData()
    }, [])

    const name = useRef()
    const grade = useRef()
    const DOB = useRef()
    const gender = useRef()

    function changeDate(event) {
        event.preventDefault()
        let newArray = student
        newArray.DOB = event.target.value
        setStudent(newArray)
    }

    async function updateStudent(event) {
        event.preventDefault();
        const res = await fetch(`http://localhost:5000/students/${id}/update`, {
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
            alert("Failed to update data!")
        }

    }
    async function deleteStudent(event) {
        event.preventDefault()
        const res = await fetch(`http://localhost:5000/students/${id}/delete`, {
            method: "DELETE"
        })
        const msg = await res.json()

        if (msg.message == 'ok') {
            history.goBack()
        } else {
            alert("Failed to delete data!")
        }
    }

    return <div className="main">
        <form className="w-4/5" onSubmit={updateStudent}>

            <h4 className="font-semibold">Name</h4>
            <input type="text" id="name" defaultValue={student.name}
                ref={name}
                className=" w-full p-3 border-solid border-2 border-grey-300" /><br /><br />

            <h4 className="font-semibold">Grade</h4>
            <input type="text" id="grade" defaultValue={student.grade}
                ref={grade}
                className=" w-full p-3 border-solid border-2 border-grey-300" /><br /><br />

            <h4 className="font-semibold">DOB</h4>
            <input type="text" id="DOB"
                placeholder="YYYY-MM-DD"
                onChange={changeDate}
                defaultValue={moment(student.DOB).format('YYYY-MM-DD')}
                ref={DOB}
                className=" w-full p-3 border-solid border-2 border-grey-300" /><br /><br />

            <h4 className="font-semibold">DOB</h4>
            <select id="gender"
                ref={gender}
                className=" w-full p-3 border-solid border-2 border-grey-300">

                <option value={student.gender}>{window.genders[student.gender]}</option>

                {window.genders.map((gender, index) => (
                    <option key={index} value={index}>{gender}</option>
                ))}
            </select><br /><br />

            <button

                className="p-3 text-white bg-blue-400 mr-3 w-2/5"
            >Update</button>
            <button
                onClick={deleteStudent}
                className="p-3 text-white bg-red-400 w-2/5"
            >Delete</button>
        </form>
    </div>
}