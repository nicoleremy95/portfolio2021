import './App.css';
import Appbar from './components/Appbar';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <h1>app</h1>
      <Appbar/>
      <Aboutme/>
      <Portfolio/>
    </div>
  );
}

export default App;
