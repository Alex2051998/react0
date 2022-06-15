import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../car/car";

const Cars = ({newCar, setCarForUpdate, updateCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(()=> {
        carService.getAll().then(({data}) => setCars(data))
    }, [updateCar])

    useEffect(() => {
        if(newCar){
            setCars([...cars, newCar])
        }
    },[newCar])

    const dell = async (id) => {
        await carService.deleteById(id);
        const newCars = cars.filter(car => car.id !== id);
        setCars(newCars);
    }

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} dell={dell} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;