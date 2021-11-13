import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../Firebase/useFirebase/useFirebase';

const Review = () => {
    const { register, handleSubmit, reset} = useForm();
    const { user } = useFirebase();
    const onSubmit = (data) => {
      fetch("https://fast-cliffs-41980.herokuapp.com/review", {
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
          <select
          className="p-2 m-2 w-50"
          {...register("star")}>
        <option value="1">0 Star</option>
        <option value="1">1 Star</option>
        <option value="2">2 Star</option>
        <option value="3">3 Star</option>
        <option value="4">4 Star</option>
        <option value="5">5 Star</option>
      </select>
           <br/>

          <input
            className="submit-btn btn btn-danger mt-3"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    );
};

export default Review;