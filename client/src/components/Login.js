import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import { FaPowerOff } from 'react-icons/fa'

export default function Login() {
    var jwt = require('jsonwebtoken');

    let text, link, button
    //if user is logged in
    if (Cookies.get('token')) {
        const token = Cookies.get('token')
        var decoded = jwt.verify(token, 'passKey123')

        //display his name and make link '/logout' and powerOff icon
        text = decoded.name
        link = '/logout'
        button = <FaPowerOff className="inline-block" />
    } else {
        text = "Login"
        link = "/login"
    }
    return <div className="text-white m-0 pt-0 p-3 hover:text-blue-300 float-right ">
        <Link to={link} className="pr-1">{text}</Link>
        {button}

    </div>
}