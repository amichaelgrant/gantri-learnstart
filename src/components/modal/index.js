import React from 'react';
import PropTypes from 'prop-types';

function Modal({open, children, onClose}) {
    
    return (
        <div className={`modal ${open? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-content" 
                style={{
                    background: "#fff",
                    padding: 30
                }}>
                <a className="delete is-pulled-right"
                    onClick={onClose}
                />
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    open: PropTypes.bool.isRequired ,
    children: PropTypes.any,
    onClose: PropTypes.func
}

export default Modal;