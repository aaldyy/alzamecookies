import React from "react";
import "./modal.scss";

const successModal = (props) => (
  <div className="sucess__modal">
    <p>Berhasil!</p>
    <p>
      Terimakasih atas pesannya.<br></br>Kami akan merespons segera mungkin.
    </p>
    <div role="button" tabIndex={0} className="modal__btn flex-center" onClick={props.closeModal} onKeyDown={props.closeModal}>
      <p>Ok</p>
    </div>
  </div>
);

export default successModal;
