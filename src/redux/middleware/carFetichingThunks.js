import axios from 'axios';

const url = "http://127.0.0.1:5000"
// const url = "https://mysterious-anchorage-28401.herokuapp.com";

export function fetchAllCars() {
    return (dispatch, getState) => {
        axios.get(`${url}/getAllCars`, {
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then(resp => { dispatch({ type: "carManagment/carDataFetched", payload: resp.data }) })
    }
}


export function fetchAllBookingsAndUsers() {
    return (dispatch,getState) => {
        console.log("admin details fetching");
        axios.get(`${url}/getAllBookings`,{
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then(resp => { dispatch({type: "carManagment/bookingsDataFetched",payload: resp.data}) })

        axios.get(`${url}/getAllUsers`,{
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then(resp=> {dispatch({type: "carManagment/usersDataFetched",payload: resp.data})})
    }
}

export function putBooking(obj) {
    return (dispatch,getState) => {
        axios.post(`${url}/addNewBooking`,obj);
    }
}