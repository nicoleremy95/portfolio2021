import './App.css';
import LandingPage from './pages/LandingPage';
import AboutmePage from './pages/AboutmePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';



function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>
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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
