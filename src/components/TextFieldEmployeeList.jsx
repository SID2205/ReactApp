import { forwardRef } from "react";



// const handleType=(e)=>{
//   console.log(e.target.value)
// }

const TextFieldList = (props,ref) => {
 



  return (
    <div className="div1EmployeeDetail">
      <label htmlFor="Username">{props.label}</label>
      <br></br>
      <input
        className={props.classname}
        type={props.type}
        value={props.value}

        ref={ref}
      />
      <br></br>
      {props.error?<div className="error">{props.error}</div>:""}
    </div>
  );
};

export default forwardRef(TextFieldList);
