import React from "react";
import "./ModalStyle/ContactModal.css";

export const Contact = ({ modalHandlerContact }) => {
  return (
    <>
      <div className="modalWrapper" onClick={modalHandlerContact}></div>
      <div className="modalContent">
        <div className="modalHeader">
          <h3 className="modalTitle">Contact</h3>
          <button className="modalClose" onClick={modalHandlerContact}>
            X
          </button>
        </div>
        <div className="modalBody">
          <form class="formContact">
            <input placeholder="Write your name here.."></input>

            <input placeholder="Let us know how to contact you back.."></input>

            <input placeholder="What would you like to tell us.."></input>

            <button onClick={modalHandlerContact}>Send Message</button>
            <div className="modalfooter">
              <span class="fa fa-phone"></span>000 1234 567
              <span class="fa fa-envelope-o"></span> contact@helpinghands.com
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
