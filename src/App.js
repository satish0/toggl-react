import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/authComponent/Login";
import Signup from "./components/authComponent/Signup";
import ResetPassword from "./components/authComponent/ResetPassword";
import UpdateProfile from "./components/authComponent/UpdateProfile";
import ForgetPassword from "./components/authComponent/ForgetPassword";
import { AuthProvider } from "./contexts/AuthContexts";
import Dashboard from "./components/dashboard/Dashboard"
import PrivateRoute from './hoc/PrivateRoute'

const dotenv = require('dotenv').config();

function App() {
  return (
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/updateprofile" component={UpdateProfile} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
            </Switch>
            <Route exact path="/forgetpassword" component={ForgetPassword} />
            <Route exact path="/resetpassword" component={ResetPassword} />
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
