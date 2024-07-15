import { forwardRef } from "react";

// const handleType=(e)=>{
//   console.log(e.target.value)
// }

const TextField = (props,ref) => {
 

  const onChange = (e) => {

    if (props.onChange) {
      return props.onChange(e.target.value);
    }
  };

  // //custom input value
  //  if (e.target.value.length <=10) {
  //    setText(e.target.value);
  //  } else {
  //    alert("Max length exceeds 10");
  //  }

  // useEffect(() => {
  //   console.log(text);
  //   return console.log(text.length);
  //   //return console.log('UM')
  // }, [text]);

  if(props.label=="Employee ID"){
    return (
      <div className="div1CreateEmployee">
        <label htmlFor="Username">{props.label}</label>
        <br></br>
        <input
          onChange={onChange}
          className={props.classname}
          type={props.type}
          placeholder={props.placeholder}
          ref={ref}
          value={props.userID}
          disabled={true}
        />
        {props.error?<div className="error">{props.error}</div>:""}
      </div>
    );
  }
  return (
    <div className="div1CreateEmployee">
      <label htmlFor="Username">{props.label}</label>
      <br></br>
      <input
        onChange={onChange}
        className={props.classname}
        type={props.type}
        placeholder={props.placeholder}
        ref={ref}
      />
      {props.error?<div className="error">{props.error}</div>:""}
    </div>
  );
};

export default forwardRef(TextField);
