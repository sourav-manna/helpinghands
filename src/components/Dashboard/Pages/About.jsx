import React from "react";
import "./ModalStyle/Modal.css";

export const About = ({ modalHandlerAbout }) => {
  return (
    <>
      <div className="modalWrapper" onClick={modalHandlerAbout}></div>
      <div className="modalContent">
        <div className="modalHeader">
          <h3 className="modalTitle">About</h3>
          <button className="modalClose" onClick={modalHandlerAbout}>
            X
          </button>
        </div>
        <div className="modalBody">
          <p className="modalText">
            Social media platforms, particularly microblogging sites like
            Twitter, have emerged as crucial sources of real-time information
            during emergency and disaster situations. However, it is often
            challenging to extract relevant and reliable information from the
            vast amount of conversational content posted during such events. To
            address this issue, we created a system that focuses on a specific
            use case – identifying real-time tweets written in both English and
            Indian Regional Language(Hindi) that communicate resource needs
            during floods - which is critical for efficient management of relief
            operations.
          </p>
        </div>
      </div>
    </>
  );
};
