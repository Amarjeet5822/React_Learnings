import { Navigate } from "react-router-dom";
// This PrivateRoute component is used to check user is Authenticated or not.


function PrivateRoute({ children }) {
  const isAuth = false; // Replace with real authentication logic
  
  if(!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute