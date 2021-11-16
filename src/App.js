import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";

import Home from "./Pages/Home/Home/Home";

import PrivateRoute from "./Pages/UserRegistration/PrivateRoute";
import NotFound from "./Pages/NotFound/Notfound";
import Register from "./Pages/UserRegistration/Register";
import LogIn from "./Pages/UserRegistration/LogIn";
import Footer from "./Pages/Footer/Footer";
import Explore from "./Pages/Explore/Explore";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Navbar from "./Pages/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/explore">
            <Explore></Explore>
          </Route>

          <PrivateRoute path="/place-order/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path="/login">
            <LogIn></LogIn>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
