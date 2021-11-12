import React from 'react';
import { useForm } from 'react-hook-form';

const Admin = () => {
    const { register, handleSubmit,reset} = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/adminMaker", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
      reset()
  };
    return (
        <div>
        <h1>Make Admin by Email</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />
  
          <input
            className="submit-btn btn btn-danger mt-3"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    );
};

export default Admin;