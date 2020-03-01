import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './index';


function SignUpModal({open, children, onClose, onSubmit}) {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return (
        <Modal 
            open={open}
            onClose={onClose}>
            <form 
                onSubmit={(evt)=>{
                    evt.preventDefault();
                    const params = {email, password};
                    onSubmit && onSubmit(params);
                }}>
                <div className="title has-text-centered is-3">Sign up</div>

                <div className="field">
                    <div className="control">
                        <input 
                        className="input is-medium" 
                        type="email" 
                        placeholder="Email"
                        required={true}
                        value={email}
                        onChange={(evt)=>{
                            const value = evt.target.value;
                            setEmail(value);
                        }}/>
                    </div>
                    <p className="help is-danger"></p>
                </div>

                <div className="field">
                    <div className="control">
                        <input 
                        className="input is-medium" 
                        type="password" 
                        placeholder="Password"
                        minLength={8}
                        maxLength={128}
                        required={true}
                        value={password}
                        onChange={(evt)=>{
                            const value = evt.target.value;
                            setPassword(value);
                        }}/>
                    </div>
                    <p className="help is-success"></p>
                </div>

                <div className="field is-grouped is-grouped-centered">
                    <div className="control is-expanded is-fullwidth">
                        <button 
                            type="submit" 
                            className="button is-primary is-fullwidth is-medium">
                            Continue
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    );
}


SignUpModal.propTypes = {
    open: PropTypes.bool.isRequired ,
    children: PropTypes.any,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func
}

export default SignUpModal;