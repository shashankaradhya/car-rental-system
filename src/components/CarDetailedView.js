import React from 'react'
import {useSelector} from 'react-redux'

import BookingFormComponent from './BookingFormComponent';


export default function CarDetailedView({ match }) {

    const cars = useSelector(state=>{ return(state.carManagment.cars)});

    const carWithId = cars ? cars.find( car => car.id === Number(match.params.carId) ) : null;
    if(carWithId)
    {
        return (
            <>
            <div className="container">
                <img src={`data:image/png;base64, ${carWithId.image}`} className="img-fluid" alt="Car" style={{width: "60%",height: "20%"}}></img>
                <div className="carWriteup" style={{color:"white"}}>
                    <h3>{carWithId.name}</h3>
                    <h5>{carWithId.brand}</h5>
                    <p>{carWithId.description}</p>
                </div>
            </div>
            <BookingFormComponent carId={carWithId.id}/>
            </>
        );
    }
    else 
    {
        return('');
    }
}