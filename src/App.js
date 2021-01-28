import './App.css';
import Appbar from './components/Appbar/Appbar';
import Landing from './pages/Landing';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Landing/>
          </Route>
          <Route exact path = '/about-me'>
            <Aboutme/>
          </Route>
          <Route exact path = '/projects'>
            <Projects/>
          </Route>
          <Route exact path = '/resume'>
            <Resume/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
