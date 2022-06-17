import React from "react";

const Modal = ({}) => {
// PhotoList Information
const { name, description, category, index } = currentPhoto;

// JSX model
return(
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <p>{category}</p>
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
)};

export default Modal;