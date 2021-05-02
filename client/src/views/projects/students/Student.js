import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

export default function Student() {
    const { id } = useParams()
    const [student, setStudent] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/students/${id}`)
            const data = await res.json()

            setStudent(data)
        }

        fetchData()
    }, [student])

    const name = useRef()
    const grade = useRef()
    const DOB = useRef()
    const gender = useRef()

    return <div className="main">
        <form className="w-4/5">
            <h4 className="font-semibold">Name</h4>
            <input type="text" id="name" defaultValue={student.name}
                ref={name}
                className=" w-full p-3 border-solid border-2 border-grey-300" /><br /><br />

            <h4 className="font-semibold">Grade</h4>
            <input type="text" id="grade" defaultValue={student.grade}
                ref={grade}
                className=" w-full p-3 border-solid border-2 border-grey-300" /><br /><br />

            <h4 className="font-semibold">DOB</h4>
            <input type="date" id="DOB" defaultValue={moment(`${student.DOB}`).format('YYYY-MM-DD')}
                ref={DOB}
                className=" w-full p-3 border-solid border-2 border-grey-300" /><br /><br />

            <h4 className="font-semibold">DOB</h4>
            <select id="gender"
                ref={gender}
                className=" w-full p-3 border-solid border-2 border-grey-300">

                <option value={student.id}>{window.genders[student.gender]}</option>

                {window.genders.map((gender, index) => (
                    <option key={index} value={index}>{gender}</option>
                ))}
            </select>
        </form>
    </div>
}