import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import Logout from './views/Logout'
import Projects from './views/Projects'

import Slider from './views/projects/Slider'
import Students from './views/projects/students/Students'
import Student from './views/projects/students/Student'

//Global variable
window.genders = ['male', 'Female']

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route exact path="/projects/slider">
            <Slider />
          </Route>

          <Route exact path="/projects/students">
            <Students />
          </Route>

          <Route exact path="/projects/students/:id">
            <Student />
          </Route>

        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
