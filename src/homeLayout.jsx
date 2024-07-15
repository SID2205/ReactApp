import { Outlet, useNavigate } from "react-router-dom"
import SideBar from "./components/sideBar";
    

const HomeLayout=()=>{
   
    localStorage.setItem("login", true);

    return (
        <div>
            <SideBar/>
            <div className="mainbar"><Outlet/></div>
        </div>
    )
}


export default HomeLayout;