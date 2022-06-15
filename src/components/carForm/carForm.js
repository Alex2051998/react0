import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const CarForm = ({setNewCar, carForUpdate, setUpdateCar}) => {
    const {register, reset, handleSubmit, setValue} = useForm();


    useEffect(() => {
        if(carForUpdate){
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    },[carForUpdate])

    const submit = async (car) => {
        if (carForUpdate){
            const {data} = await carService.updateById(carForUpdate.id, car);
            setUpdateCar(data);
            reset();

        }else{
            const {data} = await carService.create(car);
            setNewCar(data);
            reset();
        }

    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <lable>Model: <input type="text" {...register('model')}/></lable>
            </div>
            <div>
                <lable>Price: <input type="text" {...register('price')}/></lable>
            </div>
            <div>
                <lable>Year: <input type="text" {...register('year')}/></lable>
            </div>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default CarForm;