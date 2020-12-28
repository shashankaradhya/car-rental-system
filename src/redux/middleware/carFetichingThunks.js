import axios from 'axios';

const url = "https://mysterious-anchorage-28401.herokuapp.com";
const urlLocal = "http://127.0.0.1:5000"

export function fetchAllCars() {
    return (dispatch, getState) => {
        axios.get(`${urlLocal}/getAllCars`, {
            headers: { "Access-Control-Allow-Origin": "*" }
        }).then(resp => { dispatch({ type: "carManagment/carDataFetched", payload: resp.data }) })
    }
}