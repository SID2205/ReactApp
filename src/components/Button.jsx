import Edit from "../assets/edit.png"
import Delete from "../assets/delete.svg"

// const handleClick=(e)=>{
//     e.preventDefault();
//     console.log(e.target)
// }

const Button = (prop) => {

const onClick=()=>{
  return prop.onClick(prop.id)
}
 
  if(prop.name=="Login"){
    return <button type="submit" onClick={prop.onClick} className={prop.type}>{prop.name}</button>;
  }
  else if(prop.name=="+"){
  return <button type="submit" onClick={prop.onClick} className={prop.type}>{prop.name}</button>;
  }
  else if(prop.name=="edit"){
    return (
      <button type="submit" onClick={onClick} className={prop.className}>
        <img src={Edit}/>
      </button>
    )
  }
  else if(prop.name=="editicon"){
    return (
      <button type="submit" onClick={prop.onClick} className={prop.className}>
        <img className="detailEditIcon" src={Edit}/>
      </button>
    )
  }
  else if(prop.name=="delete"){
    return (
      <button type="submit" onClick={prop.onClick} className={prop.className}>
        <img src={Delete}/>
      </button>
    )
  }
   else{
    return <button type="submit" onClick={prop.onClick} className={prop.type}>{prop.name}</button>;
    
   }
};

export default Button;
