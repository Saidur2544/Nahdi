import React from 'react';
import Header from '../Shared/Header/Header';
import loginPhoto from "../../Images/login.jpg"
import "./Login.css";
import {useState } from "react";
import useAuth from '../Hooks/useContext';

const Login = () => {
    const { signInWithGoogle, registerNewUser,  processLogin , error} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputError , setInpitError] = useState('');

    const getEmail = (e) =>{
        setEmail(e.target.value);
    }
    const getPassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleWIthRegister = e =>{
        e.preventDefault();
        if (password.length < 6) {
            setInpitError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setInpitError('Password Must contain 1 upper case');
            return;
        }
        registerNewUser (email, password);
        setInpitError('');
    }
    const handleWIthLogin = e =>{
        e.preventDefault();
        if (password.length < 6) {
            setInpitError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setInpitError('Password Must contain 1 upper case');
            return;
        }
        processLogin(email, password);
        setInpitError('');
    }
    return (
        <div>
            <Header></Header>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ">
                            {inputError && <div className="alert alert-danger">{inputError}</div>
                            }
                            {error && <div className="alert alert-danger">{error}</div>
                            }
                            <form>
                                <div className="my-5">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" required className="form-control" onBlur={getEmail} />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input onBlur={getPassword} type="password" className="form-control" required id="exampleInputPassword1" />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button onClick={handleWIthRegister} type="submit" className="btn btn-success me-3">Register</button>
                                    <button onClick={handleWIthLogin} type="submit" className="btn btn-success">Login</button>
                                </div>
                            </form>
                            <div className="text-center">---------- OR ----------</div>
                                    <p ></p>
                            <div className="text-center">
                                <button onClick={signInWithGoogle} className="btn btn-success">Connet Us with Google</button>
                            </div>
                        </div>
                        <div className="col-lg-6  ">
                            <div className="img-logo">
                                <img src={loginPhoto} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;