import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Students() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/students/`)
            const students = await res.json()

            setStudents(students)
        }

        fetchData()
    }, []);

    return <div className="main">
        <h1 className="text-xl font-semibold p-3">Fetching data from mysql database</h1>

        <ol className="list-decimal p-3">

            {students.map((student, index) => (
                <Link to={'/projects/students/' + student.id}
                    className="underline text-blue-300"
                    key={index}>
                    <li>{student.name}</li>
                </Link>

            ))}

        </ol>

        <Link to='/projects/students/create'>
            <button className="bg-blue-400 w-2/5 text-white p-3">New</button>
        </Link>
    </div>
}