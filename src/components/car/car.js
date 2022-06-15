const Car = ({car, dell, setCarForUpdate}) => {
    const {id, model, price, year} = car;


    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dell(id)}>delete</button>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <hr/>
        </div>
    );
};

export default Car;