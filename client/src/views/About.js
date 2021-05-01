export default function About() {
    return <div className="main m-auto content-center object-center mb-3 pt-2">

        <center>
            <img src="images/patrick.jpg" className="w-1/2" alt="my pic :)" />

            <h1 className="font-sans text-2xl font-bold object-center p-3">About me!</h1>
        </center>

        <p className="font-sans p-3">I am Burundian and love writing software. I write code since
        I was 13 years old and keep on learning new things.
        </p>

        <h4 className="p-3">I know:</h4>
        <ol className="p-3">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>React</li>
            <li>Python</li>
            <li>...</li>
        </ol>
    </div>
}