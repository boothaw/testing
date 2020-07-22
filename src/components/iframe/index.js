import { createPortal } from "react-dom";
import React, { useState, useEffect } from "react";

const Ifr = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef && setContentRef.contentWindow.document.body;

  return (
    <iframe {...props} ref={setContentRef}>
      {mountNode && createPortal(React.Children.only(children), mountNode)}
    </iframe>
  );
};

export default Ifr;
