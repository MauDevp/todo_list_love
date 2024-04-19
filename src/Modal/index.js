import React from "react";
import ReactDOOM from "react-dom";
import "./Modal.css";

function Modal({children}){
    return ReactDOOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>, 
        document.getElementById('modal')
    );
}

export { Modal };

