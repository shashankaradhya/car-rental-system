import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CarsView from './components/CarsView';
import {Switch,Route} from 'react-router-dom';

import {useDispatch} from 'react-redux';


import {fetchAllCars} from './redux/middleware/carFetichingThunks';

import CarDetailedView from './components/CarDetailedView';

function App() {

  const dispatch = useDispatch();

  dispatch(fetchAllCars());
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/carView" component={CarsView} />
        <Route exact path="/carView/:carId" component = {CarDetailedView} />
      </Switch>
    </div>
  );
}

export default App;
