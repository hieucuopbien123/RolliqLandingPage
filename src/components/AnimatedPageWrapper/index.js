import React from "react";

const AnimatedPageWrapper = ({ children, animated }) => {
  return (
    <>
      <div className={`animate__animated animate__${animated}`}>{children}</div>
    </>
  );
};

export default AnimatedPageWrapper;
