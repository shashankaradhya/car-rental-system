import React,{useRef,useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import {useDispatch,useSelector} from 'react-redux';
import { signup,login } from "../redux/middleware/authThunks";
import {auth} from '../auth/firebaseManagment';


export default function Navbar() {
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(user=> {
            if(user===null)
                return;
            dispatch({type: 'login/completed',payload: {current_user:user}})
        })
    }, []);


    const signupEmailRef = useRef();
    const signupPasswordRef = useRef();
    const signupPasswordConfirmRef = useRef();
    const loginEmailRef = useRef();
    const loginPasswordRef = useRef();

    const handleSignup = e => {
        e.preventDefault();
        if(signupPasswordRef.current.value !== signupPasswordConfirmRef.current.value)
        {
            alert("passwords don't match");
            return;
        }

        dispatch(signup(signupEmailRef.current.value,signupPasswordRef.current.value));
        $('#signUpModal').modal('hide');
        e.target.reset();
    }
    const handleLogin = e => {
        e.preventDefault();
        dispatch(login(loginEmailRef.current.value,loginPasswordRef.current.value));
        $('#loginFormModal').modal('hide');
        e.target.reset();
    }



    const authStatus = useSelector( state => state.auth.status );
    const current_user = useSelector( state => state.auth.current_user );

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">Car Rental</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Home</NavLink>
                            </li>
                            {
                                authStatus ==='successful' ?
                                (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/carView'>View Cars</NavLink>
                                </li>
                                )
                                :
                                ''
                            }
                                {
                                    authStatus !== 'successful' 
                                    ?
                                    <>
                                    <button className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#loginFormModal">Login</button>
                                    <button className="btn btn-outline-success my-2 my-sm-0 ml-2"  data-toggle="modal" data-target="#signUpModal">Sign Up</button>
                                    </>
                                    :
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {current_user ? current_user.email: ""}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#" onClick={()=>{auth.signOut();dispatch({type: 'loggedOut'})}}>Logout</a>
                                        </div>
                                    </li>
                                }
                            </ul>    
                        </div>
                    </nav>
            </div>

            <div id="signUpModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSignup}>
                                    <div className="form-group row">
                                        <label htmlFor="signup-email" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" ref={signupEmailRef} className="form-control" id="signup-email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="signup-password" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" ref={signupPasswordRef} className="form-control" id="signup-password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="signup-confirm-password" className="col-sm-2 col-form-label">Confirm Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" ref={signupPasswordConfirmRef} className="form-control" id="signup-confirm-password" placeholder="Re type password" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-10">
                                            <button type="submit" className="btn btn-primary">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>

            <div id="loginFormModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit = {handleLogin}>
                                <div className="form-group row">
                                    <label htmlFor="loginEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" ref={loginEmailRef} className="form-control" id="loginEmail" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="loginPassword" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password" ref={loginPasswordRef} className="form-control" id="loginPassword" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Log In</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
}
