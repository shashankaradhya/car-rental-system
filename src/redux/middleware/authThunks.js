import { auth } from "../../auth/firebaseManagment";
import axios from 'axios';



const urlLocal = "http://127.0.0.1:5000";

export const signup = (email, password) => {
    return (dispatch, getState) => {
        console.log("hello world");
        dispatch({ type: "signup/pending" })
        auth.createUserWithEmailAndPassword(email, password).then(user => {
            dispatch({ type: "signup/completed", payload: user.user });
            axios.post(`${urlLocal}/addNewUser`,{
                id: user.user.uid,
                email: user.user.email
            })
        }).catch(err => {
            dispatch({ type: 'signup/failed', payload: err });
        })
    }
}

export const login = (email, password) => {
    return (dispatch, getState) => {
        dispatch({ type: "login/pending" })
        auth.signInWithEmailAndPassword(email, password).then(user => {
            console.log(user.user);
            dispatch({ type: "login/completed", payload: user.user });
        }).catch(err => {
            dispatch({ type: 'login/failed', payload: err });
        })
    }
}