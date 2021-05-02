import React, { useState, useEffect } from 'react'

export default function Students() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/students/`)
            const students = await res.json()

            setStudents(students)
        }

        fetchData()
    }, [students]);

    return <div className="main">
        <h1 className="text-xl font-semibold p-3">Fetching data from mysql database</h1>

        <ol className="list-decimal p-3">

            {students.map((student, index) => (
                <a href={'/projects/students/' + student.id}
                    className="underline text-blue-300">
                    <li key={index}>{student.name}</li>
                </a>

            ))}

        </ol>
    </div>
}