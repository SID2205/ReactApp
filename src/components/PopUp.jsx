import Button from "./Button"


const PopUp=(props)=>{

    return (
    <div className="divPopUp">
        <div className="div1PopUp">
        <button className="X" type="submit" onClick={props.onClose}>X</button>
        </div>
        <div>
        <h2>Are you sure?</h2>
        
        </div>
        <div>
        <p>Do you really want to delete employee?</p>
        </div>
        <div>
        <Button type="Blue" name="Confirm"></Button>
        <Button type="grey" name="Camcel"></Button>
        </div>
     </div>
)}


export default PopUp