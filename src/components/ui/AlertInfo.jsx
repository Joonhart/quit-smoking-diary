import { Alert } from "flowbite-react";
import React from "react";

const AlertInfo = ({text}) => {
  return (
    <Alert color="info">
      <span>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </span>
    </Alert>
  );
};

export default AlertInfo;
