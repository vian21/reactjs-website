import { useRef } from 'react'
import Cookies from 'js-cookie'

export default function Login() {
    const email = useRef('')
    const password = useRef('')

    async function handleSubmit(event) {
        event.preventDefault()

        const res = await fetch("http://localhost:5000/users/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email.current.value,
                password: password.current.value
            })
        })
        const data = await res.json()

        if (data === 'ko') {
            alert("Wrong credentials!")
        } else {
            Cookies.set('token', `${data.token}`)
            window.location.replace("/")
        }
    }

    return <div className="main">
        <form onSubmit={handleSubmit} className="w-4/5 pt-20">
            <input type="email" placeholder="Enter email"
                ref={email}
                className="w-full p-3 border-solid border-grey-300 border-2" required /><br /><br />

            <input type="password" placeholder="Enter your password"
                ref={password}
                className="w-full p-3 border-solid border-grey-300 border-2" required /><br /><br />

            <button type="submit"
                className="w-full p-3 border-solid border-grey-300 border-2 bg-blue-400 text-white"
            >Login</button>
        </form>
    </div>
}