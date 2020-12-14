import React from 'react';
import bugatiVeyron from '../assets/bugatiVeyron.png';
import lamborginiAventedor from '../assets/lamborginiAventedor.png';
import nissanGtr from '../assets/nissan-gtr.png';
import bugatiChiron from '../assets/bugati-chiron.png';




const carsArr = [
    {
        id: 1,
        brand: 'Lamborghini ',
        name: 'Aventador',
        image: lamborginiAventedor,
        description: 'The Aventador S expresses unmistakable Lamborghini DNA, adding even more dynamism, refinement and aggressiveness through its finely honed features.'
    },
    {
        id: 2,
        brand: 'Bugati',
        name: 'Veyron',
        image: bugatiVeyron,
        description: 'The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Bugatti Engineering GmbH and manufactured by the Bugatti Automobiles SAS in Molsheim, France.'
    },
    {
        id: 3,
        brand: 'Nissan',
        name: 'GTR',
        image: nissanGtr,
        description: 'At the heart of the GT-R is an ideally sized, twin-turbocharged 3.8-L V6 that produces a prodigious 570 ps and equally immense 637 nm of torque.'
    },
    {
        id: 4,
        brand: 'Bugati',
        name: 'Chiron',
        image: bugatiChiron,
        description: 'The Chiron is Bugatti\'s natural successor to the Veyron. Powered by a 8.0-litre quad-turbocharged W16 engine that makes a whopping 1500PS of power and 1600Nm of torque, the Chiron can do the 0-100kmph run in just 2.5 seconds. ... Bugatti will build the Chiron only in limited numbers, 500 to be exact.'
    }
]

function CarView({car}) {
    return( 
        <div className="mt-3 col-md-4 col-sm-6 col-12">
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={car.image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{car.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{car.brand}</h6>
                    <p className="card-text">{car.description}</p>
                    <a href="#" className="btn btn-primary">Book Car</a>
                </div>
            </div>
        </div>
    );
}
export default function CarsView() {
    const carsUiArr = carsArr.map(car=><CarView car={car} key={car.id}/>);
    return (
        <div className="container">
            <div className="row">
                {carsUiArr}
            </div>
        </div>
    )
}
