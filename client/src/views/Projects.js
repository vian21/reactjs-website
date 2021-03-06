import { Link } from 'react-router-dom'

export default function projects() {
    const projects = [
        {
            name: "Fetching JSON",
            link: "/projects/students"
        },
        {
            name: "React Image Slider",
            link: "projects/slider"
        }
    ]
    return <div className="main m-auto items-center">
        {projects.map((project, index) => (
            <Link to={project.link}
                key={index}>
                <button
                    className="p-4 bg-blue-300 text-white rounded-full m-4"
                >
                    {project.name} ➝</button>

                <br />
            </Link>
        ))}
    </div>
}