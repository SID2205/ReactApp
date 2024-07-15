import "./createEmployeeStyle.css";
import Button from "./components/Button";
import { Component, useState } from "react";
import employeeDetail from "./employeeDetail";
import { useNavigate } from "react-router-dom";
import PopUp from "./components/PopUp";

const fields = [
  "Employee name",
  "Employee ID",
  "Joining date",
  "Role",
  "Status",
  "Experience",
  "Action",
];
const employeeList = [
  {
    name: "Vishal M",
    id: 1,
    joiningDate: "12.04.2021",
    role: "Full Stack",
    status: "Probation",
    experience: "5 Years",
  },
  {
    name: "Susan Kurian",
    id: 2,
    joiningDate: "12.04.2021",
    role: "UI Engineer",
    status: "Probation",
    experience: "7Years",
  },
];

const EmployeeList = () => {
  const navigate = useNavigate();
  const [showPopUp,setPop]=useState(false)

  

  const handleCreate = () => {
    navigate(`create`);
  };

  const handleEdit = (e) => {
    navigate(`edit/${e}`);
  };

  const handleDisplay = () => {
    navigate(`employeeDetail`);
  };

  const handleDelete = () => {
   setPop(true)
  };
  const onClose = () => {
    setPop(false)
   };

  return (
    <main className="main_createEmployee">
      <div className="no_use"></div>

      <section className="sec_mainEmployeeList">
        <div>
          <p>Employee List</p>
        </div>
        <div className="divEmployeeList">
          <div className="filtermid">
            <p>Filter by </p>
            <input value="Status" className="filterby" />
          </div>
          <div>
            <Button type="buttonEmployeeList" name="+" onClick={handleCreate} />
            <input
              value="Create Employee"
              type="text"
              className="ipCreateList"
            />
          </div>
        </div>
      </section>
      <section className="sec_formEmployeeList">
        <div className="formEmployeeList">
          <div className="elist">
            <div>{fields[0]}</div>
          </div>
          <div className="elist">
            <div>{fields[1]}</div>
          </div>
          <div className="elist">
            <div>{fields[2]}</div>
          </div>
          <div className="elist">
            <div>{fields[3]}</div>
          </div>
          <div className="elist">
            <div>{fields[4]}</div>
          </div>
          <div className="elist">
            <div>{fields[5]}</div>
          </div>
          <div className="elist">
            <div>{fields[6]}</div>
          </div>
        </div>
      </section>
      <section className="secformEmployeeList">
        {employeeList.map((emp) => {
          return (
            <div className="formEmployeeList" key={emp.id}>
              <div className="elist" onClick={handleDisplay}>
                {emp.name}
              </div>
              <div className="elist" onClick={handleDisplay}>
                {emp.id}
              </div>
              <div className="elist" onClick={handleDisplay}>
                {emp.joiningDate}
              </div>
              <div className="elist" onClick={handleDisplay}>
                {emp.role}
              </div>
              <div className="probation" onClick={handleDisplay}>
                {emp.status}
              </div>
              <div className="elist" onClick={handleDisplay}>
                {emp.experience}
              </div>
              <div>
                <Button
                  className="editButton"
                  name="edit"
                  onClick={handleEdit}
                  id={emp.id}
                />
                <Button
                  className="deleteButton"
                  name="delete"
                  onClick={handleDelete}
                ></Button>
                {showPopUp && <PopUp onClose={onClose}/>}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
