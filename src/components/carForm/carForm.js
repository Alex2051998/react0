import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const submit = (data) => {
        console.log(data);
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
            <button>SAVE</button>
        </form>
    );
};

export default CarForm;