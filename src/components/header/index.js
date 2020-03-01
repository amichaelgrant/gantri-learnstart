import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Modal from '../modal';
import SignUpModal from '../modal/signup';


function Header() {
    const[signUpOpen, setSignUpOpen] = useState(false);

    return (
        <div className="Header">
            <nav className="navbar is-light is-spaced is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="container">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <label className="has-text-black has-text-weight-bold">LearnStart</label>
                    </Link>

                    <a role="button" 
                        className="navbar-burger burger" 
                        aria-label="menu" 
                        aria-expanded="false" 
                        data-target="navbarBasicExample"
                        onClick={(evt)=>{
                            console.log("burger: ", evt.target.dataset);
                            evt.target.classList.toggle("is-active")
                            const el = document.getElementById(evt.target.dataset.target);
                            if(el)el.classList.toggle("is-active");
                        }}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/stories"> 
                            Stories
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a 
                                    className="button is-default has-text-primary"
                                    onClick={()=>{
                                        setSignUpOpen(true);
                                    }}>
                                    <strong>Sign up</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </nav>

            <SignUpModal
                open={signUpOpen}
                onClose={()=>{
                    setSignUpOpen(false);
                }}
                onSubmit={(params)=>{
                    console.log("SignIpModal: ", params);
                    setSignUpOpen(false);
                }}
            />
        </div>
    );
};

export default Header;