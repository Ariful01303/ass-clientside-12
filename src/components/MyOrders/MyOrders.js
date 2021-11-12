import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Firebase/useFirebase/useAuth';

const MyOrders = () => {
    const {user}=useAuth()
const email=user?.email;
const [orderDetail,setorderDetail]=useState([])
useEffect(()=>{
    fetch(`http://localhost:5000/detail/${email}`)
    .then(res=>res.json())
    .then(data=>setorderDetail(data))

},[email])

const handleDeleteBooking = (id) => {
  const proceed=window.confirm("Are you sure, You want to Delete?")
    if(proceed){
      fetch(`http://localhost:5000/detail/${id}`, {
        method: "DELETE",
      
      })
        .then((res) => res.json())
        .then((result) => {
            
          if (result.deletedCount) {
             
             alert("Successfully Deleted")
             const remaining=orderDetail.filter(bk=>bk._id !==id)
             setorderDetail(remaining)
  
          } 
        });
    }
  };
    return (
        <div className="container  pb-5">
            <div className="d-flex align-items-center justify-content-center ">
            
            <div className="row ">
            {
                orderDetail.map(detl=><div className="col-lg-12 col-md-12 col-sm-12 col-12 g-2 border extra-style" key={detl._id}>
                   
                    <img src={detl?.img} alt="" />
                    <h4>{detl?.displayName}</h4>
                    <h4>{detl.email}</h4>
                    <h4>{detl?.name}</h4>
                    <h4>{detl.displayName} location: {detl?.location}</h4>
                    <h4>Contact Num :{detl?.contact}</h4>
                    
                    <h4>Total Amount :{detl?.price}</h4>
                   
                 
                   <div className="d-flex justify-content-between p-2" >
                   
                    {/* <button className="btn btn-danger mb-2" onClick={handlecomfrom}>Conform</button> */}
                    <Link to={`/manageorder/${detl._id}`}><button className="btn btn-primary">Conform</button></Link>
                    <button className="btn btn-danger mb-2" onClick={()=>handleDeleteBooking(detl._id)}>Cencel</button>
                   
                   </div>
                </div>)
            }
            </div>
            
        </div>
       </div>
    );
};

export default MyOrders;