import React from "react";
import { VscError } from "react-icons/vsc";
const Error = ({ msg }) => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <VscError fontSize={80} />
      {msg}
    </div>
  );
};

export default Error;
