import Cookies from 'js-cookie'

export default function Logout() {
    //unset token cookie
    Cookies.remove('token')

    //redirect to main page
    window.location.replace("/")

    return null
}