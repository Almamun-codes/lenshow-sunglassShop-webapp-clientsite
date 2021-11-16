import React, { useEffect, useState } from "react";
import { Route, useRouteMatch, Switch, Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddProduct from "../AddProduct/AddProduct";
import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut } = useAuth();
  const handlelogout = () => {
    logOut();
  };

  const [users, setUsers] = useState([]);
  // const [admin, setAdmin] = useState(false);

  const foundUser = users.find((element) => element.email === user.email);

  console.log(foundUser);
  useEffect(() => {
    fetch("https://mighty-fjord-00429.herokuapp.com/users").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setUsers(data);
      })
    );
  }, []);
  return (
    <div>
      <div className="top-bg">
        <div className="d-flex flex-wrap pt-5">
          <div className="col-sm-12 col-lg-3 ">
            <div className="p-2">
              {foundUser?.role === "admin" ? (
                <>
                  <Link to={`${url}/add-product`}>
                    <p className="p-3 rounded bg-success text-decoration-none text-white text-center">
                      Add A Product
                    </p>
                  </Link>
                  <Link to={`${url}/make-admin`}>
                    <p className="p-3 rounded bg-success text-decoration-none text-white text-center">
                      MakeAdmin
                    </p>
                  </Link>
                  <Link to={`${url}/manage-orders`}>
                    <p className="p-3 rounded bg-success text-decoration-none text-white text-center">
                      Manage Orders
                    </p>
                  </Link>
                  <Link to={`${url}/my-orders`}>
                    <p className="p-3 rounded bg-success text-decoration-none text-white text-center">
                      My Orders
                    </p>
                  </Link>
                  <Link to={`${url}/manage-products`}>
                    <p className="p-3 rounded bg-success text-decoration-none text-white text-center">
                      Manage Products
                    </p>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={`${url}/add-review`}>
                    <p className="p-3 rounded bg-success text-decoration-none text-white text-center">
                      Add Review
                    </p>
                  </Link>

                  <Link to={`${url}/my-orders`}>
                    <p className="p-3 rounded bg-success text-decoration-none text-white text-center">
                      My Orders
                    </p>
                  </Link>

                  <Link to={`${url}/pay`}>
                    <p className="p-3 rounded bg-success text-decoration-none text-white text-center">
                      Pay
                    </p>
                  </Link>
                </>
              )}
              <p
                onClick={() => handlelogout()}
                className="p-3 rounded bg-success text-decoration-none text-white text-center"
              >
                Log Out
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-9 text-center">
            <Switch>
              <Route path={`${path}/add-product`}>
                <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}/add-review`}>
                <AddReview></AddReview>
              </Route>
              <Route path={`${path}/make-admin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path={`${path}/manage-orders`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route path={`${path}/manage-products`}>
                <ManageProducts></ManageProducts>
              </Route>
              <Route exact path={`${path}`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/my-orders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
