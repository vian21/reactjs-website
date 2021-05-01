import Login from './Login'
import { Link, useHistory } from 'react-router-dom'

export default function NavBar() {
    const history = useHistory()
    return <div className="w-full bg-green-300 m-0 p-3">
        <button onClick={() => { history.goBack() }} className="text-white">⇽</button>

        <Link to='/' className="text-white p-3 hover:bg-blue-300">Home</Link>
        <Link to='/about' className="text-white p-3 hover:bg-blue-300">About</Link>
        <Link to='/contact' className="text-white p-3 hover:bg-blue-300">Contact</Link>
        <Link to='/projects' className="text-white p-3 hover:bg-blue-300">Projects</Link>

        <Login />
    </div>
}