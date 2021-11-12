import React from 'react';
import { useForm } from "react-hook-form";
const AddAproduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
   
      fetch("https://fast-cliffs-41980.herokuapp.com/services", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
  
      reset();
    }; 
    return (
        <div className="container mb-5 mt-5 extra-sty col-lg-6 m-auto col-md-6 col-sm-12 p-2 col-12 w-50 ">
         
        <h3>Add Bike Details</h3>
         <form onSubmit={handleSubmit(onSubmit)}>

 
  <input className="p-2 m-2 w-50" type="text" {...register("name")} placeholder="Bike Name"/> <br />
 
  <input className="p-2 m-2 w-50" type="text" {...register("description")} placeholder="Description"/> <br />
  <input className="p-2 m-2 w-50" type="number" {...register("price")} placeholder="Amount"/> <br />
 <input className="p-2 m-2 w-50" {...register("photo")} placeholder="Img Url"/> <br />
  <input className="btn btn-primary" type="submit" />
</form>
    </div>
    );
};

export default AddAproduct;