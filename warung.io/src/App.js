import './App.css';
import 'bootstrap-5.0.2-dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Description from './components/Description';
import Partner from './components/Partner';
import Feature from './components/Feature';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Welcome/>
        <Description/>
        <Partner/>
        <Feature/>
      </header>
    </div>
  );
}

export default App;
