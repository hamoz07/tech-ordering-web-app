import { forwardRef } from "react"

import './Input.css'

const Input = (props,refs) => {
  return (
    <div className={"input"}>
      <label style={{marginRight:"5px",fontWeight:"bold"}}>
      {props.label}
      </label>
      <input ref={refs} {...props.amountInput} />
    </div>
  );
};

// Input.displayName = "input"

export default forwardRef(Input)
