import React, { Fragment } from "react";

export const InputText = ({ label, value, id }) => {
  return (
    <Fragment>
      <label>
        {label}
        <input type={"text"} value={value} id={id} />
      </label>
    </Fragment>
  );
};
