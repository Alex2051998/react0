import './App.css';
import CarForm from "./components/carForm/carForm";
import Cars from "./components/cars/cars";
import {useState} from "react";

function App() {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);
  return (
      <div>
          <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUpdateCar={setUpdateCar}/>
          <hr/>
          <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updateCar={updateCar}/>
      </div>
      );
}

export default App;
