import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import Login from "./login";
import PageNotFound from "./pageNotFound";
import HomeLayout from "./homeLayout";
import Employee from "./employees";
import "./index.css";
import Logout from "./Logout";
import EmployeeList from "./EmployeeList";
import EditEmployee from "./EditEmployee";
import EmployeeDetail from "./employeeDetail";


const id=()=>{
  let {userId}=useParams()
  return userId
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/employee",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <EmployeeList />,
      },
      {
        path: "create",
        element: <Employee />,
      },
      {
        path:"edit",
        element:<EditEmployee/>
      },
      {
        path:"edit/:id",
        element:<EditEmployee/>,
      },
      {
        path: "logout",
        element: <Logout/>,
      },
      {
        path:"employeeDetail",
        element:<EmployeeDetail/>
      }
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
