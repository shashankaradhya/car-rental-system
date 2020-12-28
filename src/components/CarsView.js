import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';




function CarView({car}) {


    return( 
        <div className="mt-3 col-md-4 col-sm-6 col-12">
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={`data:image/png;base64, ${car.image}`}alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{car.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{car.brand}</h6>
                    <p className="card-text">{car.description}</p>
                    <Link to={`/carView/${car.id}`} className="btn btn-primary">View Car</Link>
                </div>
            </div>
        </div>
    );
}
export default function CarsView() {
    const authStatus = useSelector(state => state.auth.status);
    var carsArr = useSelector(state => state.carManagment.cars);
    if(authStatus !== 'successful')
    {
        return("You need to login");
    }


    const carsUiArr = carsArr ? carsArr.map(car=><CarView car={car} key={car.id}/>) : ''
    return (
        <>
        <div className="container">
            <div className="row">
                {carsUiArr}
            </div>
        </div>
        </>
    )
}
