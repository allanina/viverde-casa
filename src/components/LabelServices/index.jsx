import React from "react";
function LabelServ({ id, label }) {
  return <label htmlFor={id}>{label}</label>;
}

export default LabelServ;
