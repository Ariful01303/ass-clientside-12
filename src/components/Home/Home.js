import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../Firebase/useFirebase/useAuth';
import Service from '../Services/Service';
import './Home.css'
const Home = () => {
    const {loading}=useAuth()
    const [services,setServices]=useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data)) 
        
  },[])
    return (
        <div>
               <div className="bike-banner mb-5 d-flex justify-content-center align-items-center"id="home">
                <div   className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mb-5">
                          <h2 className="title">Best Seller of Bike BD </h2>
                          <p className="sub-title mb-5">Select Your Best Motor Bike And connet with us</p>
                        </div>
                        <div className="col-lg-4 col-md-2">

                        </div>
                    </div>
                </div>
               
            </div>
            <div className="container">
          <h2 className="text-danger">Perfect for Travel</h2>
          {loading?<Spinner animation="border" variant="warning" /> : 
          <div>
          <div className="d-flex p-5 ">
               
             <div className="row">
             {
                    services.map((service)=><Service
                    key={service._id}
                    service={service}></Service>)
                       

                    
               }
             </div>
            </div>
            </div>}
            </div>
        </div>
    );
};

export default Home;