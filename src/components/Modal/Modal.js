import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

function usePortal() {
  const rootElemRef = React.useRef(document.createElement("div"));

  useEffect(function setupElement() {
    modalRoot.appendChild(rootElemRef.current);
    return function removeElement() {
      rootElemRef.current.remove();
    };
  }, []);

  return rootElemRef.current;
}

const Modal = ({ children }) => {
  const target = usePortal();
  return ReactDOM.createPortal(children, target);
};
export default Modal;
