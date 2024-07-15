import "./createEmployeeStyle.css";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { Component, useState } from "react";

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
    classname: "ip",
    type: "text",
    label: "Employee ID",
    placeholder: "Employee ID",
    //text: "",
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

const Employee = () => {
  const [data, setData] = useState({
    empName: "",
    empID: "",
    jD: "",
    role: "",
    status: "",
    exp: "",
    add: "",
  });

  const [error, errorState] = useState({
    empNameError: false,
    empIDError: false,
    jDError: false,
    roleError: false,
    statusError: false,
    expError: false,
    addError: false,
  });

  const onInput = ([id, value]) => {
    let newData = {};
    console.log(id);
    newData[id] = value;
    setData((data) => ({ ...data, ...newData }));
  };

  return (
    <main className="main_createEmployee">
      <div className="no_use"></div>

      <section className="sec_main">
        <p>Create Employee</p>
      </section>
      <section className="sec_form">
        <form className="form">
          {fields.map((field) => {
            return field.Component ? (
              <field.Component
                //text={data}
                classname={field.classname}
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
                key={field.id}
                onChange={onInput}
              />
            ) : (
              <TextField
                classname={field.classname}
                type={field.type}
                label={field.label}
                placeholder={field.placeholder}
                key={field.id}
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
              />
            ) : (
              <Button
                type={buttons.type}
                name={buttons.name}
                key={buttons.id}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Employee;
