import { Link } from "react-router-dom";


const pageNotFound= () => {
      return (
        <div>
        <h1>Page not found</h1>
        <Link to="/">Go home</Link>
          
        </div>
    )
    };
export default pageNotFound;