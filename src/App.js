import React, { useState, useRef, useLayoutEffect } from 'react';

export default function App() {
  const [width, setWidth] = useState(0);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const infos = buttonRef.current.getBoundingClientRect();
    setWidth(infos.width);
  }, []);

  return (
    <>
      <button ref={buttonRef} className="m-10">
        Je suis un bouton
      </button>
      <p className="m-10">{width}</p>
    </>
  );
}
