import { Alert } from "flowbite-react";
import React from "react";

const AlertInfo = ({text}) => {
  return (
    <Alert color="info">
      <span>
        <span className="font-medium">${text}</span>
      </span>
    </Alert>
  );
};

export default AlertInfo;
