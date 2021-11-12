import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../Firebase/useFirebase/useFirebase';

const Review = () => {
    const { register, handleSubmit, reset} = useForm();
    const { user } = useFirebase();
    const onSubmit = (data) => {
      fetch("http://localhost:5000/review", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
  
        reset()
    };
    return (
        <div>
        <h1>Review</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2 w-50"
            name="email"
            value={user?.email}
            type="email"
            {...register("email", { required: true })}
          />
          <input
           className="p-2 m-2 w-50"
            name="userName"
            placeholder="User Name"
            value={user?.displayName}
            type="text"
            {...register("userName", { required: true })}
          />
          <br />
          <input
           className="p-2 m-2 w-50"
            name="comments"
            placeholder="Comments"
            {...register("comments", { required: true })}
          />
          <br />
  
          <input
            className="submit-btn btn btn-danger mt-3"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    );
};

export default Review;