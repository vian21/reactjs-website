import Layout from './components/Layout'
import { BrowserRouter as Router, Switch, Route, Li } from "react-router-dom";
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </switch>
      </Router>

    </div>
  );
}

export default App;
