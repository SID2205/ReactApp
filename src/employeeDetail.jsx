import "./createEmployeeStyle.css";
import Button from "./components/Button";
import TextField from "./components/TextField";
import { Component, useState } from "react";
import TextFieldEmployeeList from "./components/TextFieldEmployeeList";
import { useNavigate } from "react-router-dom";

const fields = [
  {
    id: "EN",
    classname: "ipDetail",
    type: "text",
    label: "Employee name",

    value: "Vishal M",
    Component: TextFieldEmployeeList,
  },
  {
    id: "JD",
    classname: "ipDetail",
    type: "text",
    label: "Joining date",

    value: "12.04.2021",
    Component: TextFieldEmployeeList,
  },
  {
    id: "EXP",
    classname: "ipDetail",
    type: "text",
    label: "Experience",

    value: "5Years",
    Component: TextFieldEmployeeList,
  },

  {
    id: "RL",
    classname: "ipDetail",
    type: "text",
    label: "Role",

    value: "Full Stack",
    Component: TextFieldEmployeeList,
  },

  {
    id: "ST",
    classname: "probationDetail",
    type: "text",
    label: "Status",

    value: "Probation",
    Component: TextFieldEmployeeList,
  },

  {
    id: "ADD",
    classname: "ipDetail",
    type: "text",
    label: "Address",

    value: "No:C-9,T.V.K Industrial Estate, Kerala 600032",
    Component: TextFieldEmployeeList,
  },
  {
    id: "EID",
    classname: "ipDetail",
    type: "text",
    label: "Employee ID",

    value: "1",
    Component: TextFieldEmployeeList,
  },
];

const EmployeeDetail = () => {
  
    const navigate=useNavigate();

  const handleEdit = () => {
    navigate(`/employee/edit/1`);
  };

  return (
    <main className="main_createEmployee">
      <div className="no_use"></div>

      <section className="sec_mainDetail">
        <div>
          <p>Employee Details</p>
        </div>
        <div className="divDetail">
          <div>
            <Button type="buttonEmployeeList" name="editicon" onClick={handleEdit} className="editDetailIcon"/>
            </div>
            <div className="detailedit">
            <input value="Edit" type="text" className="ipEditDetail" />
          </div>
        </div>
      </section>
      <section className="sec_form">
        <form className="formDetail">
          {fields.map((field) => {
            return field.Component ? (
              <field.Component
                classname={field.classname}
                type={field.type}
                label={field.label}
                joiningDate={field.joiningDate}
                value={field.value}
                key={field.id}
              />
            ) : (
              <TextFieldEmployeeList
                classname={field.classname}
                type={field.type}
                label={field.label}
                joiningDate={field.joiningDate}
                value={field.value}
                key={field.id}
              />
            );
          })}
        </form>
      </section>
    </main>
  );
};

export default EmployeeDetail;
