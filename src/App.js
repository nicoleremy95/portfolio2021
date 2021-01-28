import './App.css';
import Appbar from './components/Appbar/Appbar';
import LandingPage from './pages/LandingPage';
import AboutmePage from './pages/AboutmePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar/>
        <Switch>
          <Route exact path = '/'>
            <LandingPage/>
          </Route>
          <Route exact path = '/about-me'>
            <AboutmePage/>
          </Route>
          <Route exact path = '/projects'>
            <ProjectsPage/>
          </Route>
          <Route exact path = '/resume'>
            <ResumePage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
