import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./techItemForm.module.css";
 
const TechItemForm = ({ onAdding }) => {
  const [wrongAmount,setWrongAmount] = useState(true)
  const amountReferer = useRef();
  const subHandler = (e) => {
    e.preventDefault();

    const amountEnteredByUser = amountReferer.current.value;
    const amountEnteredByUserNumed = +amountReferer.current.value;

    if (
      amountEnteredByUser.trim().length === 0 ||
      amountEnteredByUserNumed < 1 ||
      amountEnteredByUserNumed > 5 
    ) {
        setWrongAmount(false) 
        return;
    } 
    
    onAdding(amountEnteredByUserNumed)
    setWrongAmount(true)
  };

  return (
    <form className={classes.form} onSubmit={subHandler}>
      <Input
        amountInput={{
          inputMode: "numeric",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
        label="amount"
        ref={amountReferer}
      />
      <button>+ Add</button>
      {!wrongAmount && <p style={{color:"red"}}>please Enter A valid amount</p>}
    </form>
  );
};

export default TechItemForm;
