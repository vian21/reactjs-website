import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Projects from './views/Projects'
import Slider from './views/projects/Slider'

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

          <Route exact path="/projects/slider">
            <Slider />
          </Route>

        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
