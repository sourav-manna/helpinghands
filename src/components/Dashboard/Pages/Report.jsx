import React from 'react'
import "./ModalStyle/ReportModal.css"

export const Report = ({modalHandlerHelp}) => {
  return (
   <>
    <div className="modalWrapper" onClick={modalHandlerHelp}></div>
    <div className="modalContent">
      <div className="modalHeader">
        <div className="modalTitle">Report</div>
        <button className="modalClose" onClick={modalHandlerHelp}>
          X
        </button>
      </div>
      <div className="modalBody">
        <form class="formContact">
          <textarea placeholder="Write your report here.."></textarea>
          <button onClick={modalHandlerHelp}>Send Report</button>
        </form>
      </div>
    </div>


   </>
  )
}
