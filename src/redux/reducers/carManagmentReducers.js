import axios from 'axios';
import { Form } from 'react-bootstrap';



const url = "https://mysterious-anchorage-28401.herokuapp.com";





export default function carManagmentReducer(state = { cars: [] }, action) {
    switch (action.type) {
        case "carManagment/carDataFetched":
            {
                return ({
                    ...state,
                    cars: action.payload
                })
            }
        case "carManagment/usersDataFetched":
            {
                return({
                    ...state,
                    users: action.payload
                })
            }
        case "carManagment/bookingsDataFetched":
            {
                return({
                    ...state,
                    bookings: action.payload
                })
            }
        default:
            return (state)
    }
}