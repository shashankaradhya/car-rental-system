import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CarsView from './components/CarsView';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/carView" component={CarsView} />
      </Switch>
    </div>
  );
}

export default App;
