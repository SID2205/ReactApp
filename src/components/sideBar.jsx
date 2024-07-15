import kvlogo from "../assets/kv-logo.png";
import icon from "../assets/icon.svg"
import { Link } from "react-router-dom";
import AddEmployee from "../assets/addemployee.png"
import LogOut from "../assets/logout.png"

const SideBar = () => {
  return (<div className="sidebardiv">
    <aside className="aside">
      <header>
        <div>
          <img className="img" src={kvlogo} alt="KeyValue Logo" />
        </div>
      </header>
      <nav>
        <div>
          <Link to="/employee">
            <div className="div_icon">
              <img className="img_icon" src={icon} alt="emp" />
            <span className="span">Employee List</span>
            <br/>
            </div>
            </Link>
            <Link to="create">
            <div className="div_icon">
            <img className="img_icon" src={AddEmployee} alt="emp" />
                <span className="span">Create</span>
                
            </div>
            </Link>
            <Link to="edit">
            <div className="div_icon">
            <img className="img_icon" src={AddEmployee} alt="emp" />
                <span className="span">Edit</span>
                
            </div>
            </Link>
            <Link to="logout">
            <div className="div_icon">
            <img className="img_icon" src={LogOut} alt="emp" />
                <span className="span">Log out</span>
                
            </div>
            </Link>
            <Link to="employeeDetail">
            <div className="div_icon">
            <img className="img_icon" src={AddEmployee} alt="emp" />
                <span className="span">Employee Detail</span>
                
            </div>
            </Link>
        </div>
      </nav>
    </aside>
    </div>
  );
};
export default SideBar;
