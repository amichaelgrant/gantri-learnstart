import React from 'react';


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

export default Modal;