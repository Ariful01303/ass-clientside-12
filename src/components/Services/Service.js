import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name,photo,_id}=service
    return (
        <div className="col-lg-4 col-md-6 g-2 col-sm-12 col-12 border extra-style">
             <img className="w-100" src={photo} alt="" />
            <h2>name{name}</h2>
            <Link to={`/detail/${_id}`}>
                <button className="btn btn-warning">Booking Detail</button>
            </Link>
        </div>
    );
};

export default Service;