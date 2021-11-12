import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import AddAproduct from '../AddAproduct/AddAproduct';
import Admin from '../Admin/Admin';
import useAuth from '../Firebase/useFirebase/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './DashBord.css'

const DashBoard = () => {

    let { path, url } = useRouteMatch();
     const {logOut,user}=useAuth()
     const [isAdmin, setIsAdmin] = useState(false);

     useEffect(() => {
       fetch(`http://localhost:5000/adminCheker/${user?.email}`)
         .then((res) => res.json())
         .then((data) => {
           if (data[0]?.role === "admin") {
             setIsAdmin(true);
           } else {
             setIsAdmin(false);
           }
         });
     }, [user?.email]);
     console.log(isAdmin);
    return (
   
     <div className="container mb-5">
          <div className="dashboard-container ">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="dashboard">
            <img className="dash-pic mt-5" src={user?.photoURL} alt="" />
               <p>{user.email}</p>
            
        {isAdmin ||  (    <div>
              <h5 className="pt-5 text-primary">Dashboard</h5>
           
           <Link to={`${url}/payment`}  className="teast">
             <li className="dashboard-menu mt-5">Payment</li>
           </Link>
           <Link to={`${url}/order`} className="teast">
               <li className="dashboard-menu">My Orders</li>
             </Link>
           <Link to={`${url}/review`} className="teast">
             <li className="dashboard-menu">Review</li>
           </Link>
           </div>)}

         { isAdmin && ( <div className="admin-dashboard">
                <h5 className="dashboard-menu mt-5 text-primary">Admin Dashboard</h5>

                <Link to={`${url}/manageproducts`} className="teast">
                  <li className="dashboard-menu">Manage Products</li>
                </Link>
               
                <Link to={`${url}/makeAdmin`} className="teast">
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
               
                <Link to={`${url}/addProduct`} className="teast">
                  <li className="dashboard-menu">Add A Product</li>
                </Link>
              </div>)}
              <Button className="mt-5" onClick={logOut} variant="danger">LogOut</Button>

            </div>
            </div>
       
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <Switch>
              <Route exact path={`${path}/payment`}>
                <Payment></Payment>
              </Route> 
               <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route> 
              <Route exact path={`${path}/order`}>
                <MyOrders></MyOrders>
              </Route>
              <Route exact path={`${path}/addProduct`}>
                <AddAproduct></AddAproduct>
              </Route>
               <Route exact path={`${path}/manageproducts`}>
                <ManageProducts></ManageProducts>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <Admin></Admin>
              </Route>
             
            </Switch>
          </div>
          </div>
        </div>
     </div>
    );
};

export default DashBoard;