import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Firebase/useFirebase/useAuth';

const Detail = () => {
    const {dtl}=useParams()
    const {user}=useAuth()

    const [details,setDetails]=useState([])
    const [detail,setDetail]=useState({})
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
   
      fetch("https://fast-cliffs-41980.herokuapp.com/detail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
  
      reset();
    };  

    useEffect(()=>{
         fetch('https://fast-cliffs-41980.herokuapp.com/services')
         .then(res=>res.json())
         .then(data=>setDetails(data))
    },[])
    useEffect(()=>{
        const founddel=details.find((del)=>del._id===dtl)
               setDetail(founddel)
    },[details,dtl])
   
    return (
        <div className="div d-flex container   mt-5 mb-5 justify-content-center align-items-center">
        <div className="row p-2">
        <div className="col-lg-6 extra-style  col-md-6 col-sm-12 col-12">
           <img className="img-fluid p-2" src={detail?.photo} alt="" />
           <h4>{detail?.name}</h4>
           <h3>{detail?.description}</h3>
          
        
        </div>
        <div  className="extra-sty col-lg-6 m-auto col-md-6 col-sm-12 p-2 col-12 w-50  ">
        
            <h3>Add Torist Details</h3>
             <form onSubmit={handleSubmit(onSubmit)}>
   
     
      <input className="p-2 m-2 w-75" type="text" {...register("displayName")} defaultValue={user?.displayName || ''}/> <br />
      <input className="p-2 m-2 w-75" type="email" {...register("email")} defaultValue={user?.email || ''} /> <br />
      <input className="p-2 m-2 w-75" type="text" {...register("name")}defaultValue={detail?.name || ''} placeholder="Name"/> <br />
     
      <input className="p-2 m-2 w-75" type="number" {...register("price")} defaultValue={detail?.price || ''} placeholder="Price"/> <br />
      <input className="p-2 m-2 w-75" type="text" {...register("location")}   placeholder="Your location"/> <br />
      <input className="p-2 m-2 w-75" type="number" {...register("contact")} placeholder="Your Contact Number"/> <br />
      
              
      <input className="p-2 m-2 w-75" {...register("img")} placeholder="Send Your Img Url"/> <br />
      <input className="btn btn-primary" type="submit" />
    </form>
       
        </div>
      </div>
       </div>
    );
};

export default Detail;