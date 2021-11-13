import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Firebase/useFirebase/useAuth';

const Service = () => {
    const {loading}=useAuth()
    const [services,setServices]=useState([])


    useEffect(()=>{
        fetch('https://fast-cliffs-41980.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data)) 
        
  },[])
    
    return (
        <div className="container">
        <h2 className="text-danger">Best Bike</h2>
        {loading?<Spinner animation="border" variant="warning" /> : 
        <div>
        <div className="d-flex p-5 ">
             
           <div className="row">
           {
                  services.map((service)=><div key={service._id} className="col-lg-4 col-md-6 g-2 col-sm-12 col-12 border extra-style">
                  <img className="w-100 p-2" src={service.photo} alt="" />
                  <h2>{service.name}</h2>
                   <p>{service.description.slice(0,120)}</p>

                   <h2 className="text-warning">Price: {service.price}</h2>
                   <Link to={`/detail/${service._id}`}>
                       <button className="btn btn-warning  mb-2">Purchase Detail</button>
                   </Link>
             </div>)
                     

                  
             }
           </div>
          </div>
          </div>}
          </div>
    );
};

export default Service;