import React from "react";
import ReactDOM from "react-dom";

import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

function Modal({ children, onClickOverlay, isModalOpen }) {
  // disable body scroll when modal open
  useLockBodyScroll(isModalOpen);

  const content = (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[rgba(255,255,255,0.1)] backdrop-blur-sm z-[1000] transition-all duration-500 overflow-hidden"
      onClick={onClickOverlay}
    >
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-[0_1.5rem_4rem_rgba(0,0,0,0.1)] bg-white p-8 sm:p-10 md:p-20 transition-all duration-300 min-w-[90%] sm:min-w-[60%] md:min-w-[50%] max-w-[95%] sm:max-w-[90%] md:max-w-4xl w-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}

export default Modal;
