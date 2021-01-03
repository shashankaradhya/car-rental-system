import React from 'react'
import AdminComponent from './AdminComponent';

export default function Home() {
    return (
        <body>
            <div className="container">
                <div className="jumbotron mt-3" style={{
                                            background: 'none',
                                            color: 'white',
                                            fontFamily: 'Brush Script MT',
                                        }}>
                <h1 className="display-1 text-center">Car Rental System</h1>
                <br />
                <br />
                <p className="lead">This project is designed so as to be used by Car Rental Company
            specializing  in renting cars to customers .</p>
                <p>The Car Rental System is being developed for customers so that they can  book their vehicles when they required .</p>
                </div> 
            </div>
            <AdminComponent />
        </body>
    )
}
