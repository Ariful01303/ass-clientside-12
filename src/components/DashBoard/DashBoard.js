import React from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import AddAproduct from '../AddAproduct/AddAproduct';
import useAuth from '../Firebase/useFirebase/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import './DashBord.css'

const DashBoard = () => {
    let { path, url } = useRouteMatch();
     const {logOut}=useAuth()
    return (
   
     <div>
          <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
             

              <Link to={`${url}/payment`}>
                <li className="dashboard-menu mt-5">Payment</li>
              </Link>
              <Link to={`${url}/order`}>
                  <li className="dashboard-menu">My Orders</li>
                </Link>
              <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>
              <Button className="mt-5" onClick={logOut} variant="danger">LogOut</Button>
              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">My</li>

               
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
                <Link to={`${url}/manageServices`}>
                  <li className="dashboard-menu">Manage Service</li>
                </Link>
                <Link to={`${url}/addProduct`}>
                  <li className="dashboard-menu">Add A Product</li>
                </Link>
              </div>
            </div>
            </div>
       
            <div className="col-md-9">
            <Switch>
              <Route exact path={`${path}/payment`}>
                <Payment></Payment>
              </Route> 
              <Route exact path={`${path}/order`}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/addProduct`}>
                <AddAproduct></AddAproduct>
              </Route>
             
            </Switch>
          </div>
          </div>
        </div>
     </div>
    );
};

export default DashBoard;