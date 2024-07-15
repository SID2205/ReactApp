import "./createEmployeeStyle.css";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { Component, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const IdFunction=(userId)=>{

return userId
}
 
const fields = [
  {
    id: "EN",
    classname: "ip",
    type: "text",
    label: "Employee name",
    placeholder: "Employee name",
    //text: "",
    Component: TextField,
  },
  {
    id: "EID",
    classname: "ipID",
    type: "text",
    label: "Employee ID",
    placeholder: "Employee ID",
    text:1,
    Component: TextField,
  },
  {
    id: "JD",
    classname: "ip",
    type: "text",
    label: "Joining date",
    placeholder: "Joining date",
    //text: "",
    Component: TextField,
  },
  {
    id: "DPT",
    classname: "ip",
    type: "text",
    label: "Department",
    placeholder: "Department",
    //text: "",
    Component: TextField,
  },
  {
    id: "RL",
    classname: "ip",
    type: "text",
    label: "Role",
    placeholder: "Role",
    //text: "",
    Component: TextField,
  },
  {
    id: "ST",
    classname: "ip",
    type: "text",
    label: "Status",
    placeholder: "Status",
    //text: "",
    Component: TextField,
  },
  {
    id: "EXP",
    classname: "ip",
    type: "text",
    label: "Experience",
    placeholder: "Experience",
    //text: "",
    Component: TextField,
  },
  {
    id: "ADD",
    classname: "ip",
    type: "text",
    label: "Address",
    placeholder: "Address",
    //text: "",
    Component: TextField,
  },
];

const button_field = [
  {
    id: "CRT",
    type: "Blue",
    name: "Create",
    
    Component: Button,
  },
  {
    id: "CNC",
    type: "grey",
    name: "Cancel",
    Component: Button,
  },
];

const EditEmployee = () => {
const param=useParams()
const userId=param.id
const navigate=useNavigate()

const onSubmit=()=>{
  navigate(`/employee`)
}


  return (
    <main className="main_createEmployee">
      <div className="no_use"></div>

      <section className="sec_main">
        <p>Edit Employee</p>
      </section>
      <section className="sec_form">
        <form className="form">
          {fields.map((field) => {
            return field.Component ? (
              <field.Component
                classname={field.classname}
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
                key={field.id}
                userID={userId}
        

                
           />
            ) : (
              <TextField
              
                classname={field.classname}
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
                key={field.id}
                text={field.text}

              />
            );
          })}
        </form>

        <div>
          {button_field.map((buttons) => {
            return button_field.Component ? (
              <buttons.Component
                type={buttons.type}
                name={buttons.name}
                key={buttons.id}
                onClick={onSubmit}
              />
            ) : (
              <Button
                type={buttons.type}
                name={buttons.name}
                key={buttons.id}
                onClick={onSubmit}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default EditEmployee;
