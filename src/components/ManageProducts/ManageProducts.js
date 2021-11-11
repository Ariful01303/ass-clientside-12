import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../Firebase/useFirebase/useAuth';

const ManageProducts = () => {
    const {loading}=useAuth()
    const [services,setServices]=useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data)) 
        
  },[])
  const handleDelete= (id) => {
    const proceed=window.confirm("Are you sure, You want to Delete?")
      if(proceed){
        fetch(`http://localhost:5000/services/${id}`, {
          method: "DELETE",
        
        })
          .then((res) => res.json())
          .then((result) => {
              
            if (result.deletedCount) {
               
               alert("Successfully Deleted")
               const remaining=services.filter(bk=>bk._id !==id)
               setServices(remaining)
    
            } 
          });
      }
    };
    
    return (
        <div className="container">
        <h2 className="text-danger">Best Bike</h2>
        {loading?<Spinner animation="border" variant="warning" /> : 
        <div>
        <div className="d-flex p-5 ">
             
           <div className="row">
           {
                  services.map((service)=><div className="col-lg-4 col-md-6 g-2 col-sm-12 col-12 border extra-style">
                  <img className="w-100" src={service.photo} alt="" />
                 <h2>name{service.name}</h2>
                 <button className="btn btn-danger mb-2" onClick={()=>handleDelete(service._id)}>Delete</button>
                   
             </div>)
                     

                  
             }
           </div>
          </div>
          </div>}
          </div>
    );
};

export default ManageProducts;