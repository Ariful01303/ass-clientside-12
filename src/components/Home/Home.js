import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Firebase/useFirebase/useAuth';
import './Home.css'
const url=(`https://inteng-storage.s3.amazonaws.com/images/SEPTEMBER/sizes/e2_kuva_resize_md.jpg`)
const Home = () => {
    const {loading}=useAuth()
    const [services,setServices]=useState([])
    const [review,setReview]=useState([])



    useEffect(()=>{
        fetch('https://fast-cliffs-41980.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data)) 
        
  },[])
  useEffect(()=>{
    fetch('https://fast-cliffs-41980.herokuapp.com/review')
    .then(res=>res.json())
    .then(data=>setReview(data)) 
    
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
          <h2 className="text-danger">Best Bike</h2>
          {loading?<Spinner animation="border" variant="warning" /> : 
          <div>
          <div className="d-flex p-5 ">
               
             <div className="row">
             {
                    services.slice(0,6).map((service)=><div key={service._id} className="col-lg-4 col-md-6 g-2 col-sm-12 col-12 border extra-style">
                    <img className="w-100 p-2" src={service.photo} alt="" />
                   <h2>{service.name}</h2>
                   <p>{service.description.slice(0,120)}</p>

                   <h2 className="text-warning">Price: {service.price}</h2>
                   <Link to={`/detail/${service._id}`}>
                       <button className="btn btn-warning  mb-2">Detail</button>
                   </Link>
               </div>)
                       

                    
               }
             </div>
            </div>
            </div>}
            </div>
            <div className="container border"id="review">
           <h2 className="text-danger">Clients Reviews</h2>
           {loading?<Spinner animation="border" variant="warning" /> : 
          <div>
               <div className="d-flex row p-5">
                   
               {
                   review.map(client=><div className="col-xl-3 col-md-3 col-sm-12 col-12 " key={client._id}>
                       <p className="badge text-wrap  text-center tes text-break"> {client.userName} : {client.comments
} </p>
                        
                   </div>)
               }
               </div>
               </div>}
           </div>
            <div id="about">
           <div>
             <div className="mt-5 mb-5 container">
            <h2 className="text-danger mt-5 mb-5" id="about">About us</h2>
            <div className="d-flex justify-content-cente align-items-center row ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <p>The Motorbike Shop is the South’s leading Premier Yamaha Dealer. A privately owned business based in Hampshire, offering the highest levels of service and expertise, whether you are looking to purchase a new Yamaha, a used motorcycle, or to service and maintain your current motorcycle.

The Motorbike Shop showcase a large selection of the latest new Yamaha models, plus an extensive choice of top quality used motorcycles. We also keep a great range of Yamaha demonstrator models and if you bring your bike in with you, we can value it for part exchange and work out a deal that suits you.

We also offer competitive finance from a variety of providers, including regular Yamaha backed promotions through Santander Finance.</p>
             </div>

             <div className="col-lg-6">
               <img className="w-100 p-3" src={url}alt="" />
            </div>
            </div>
            

            </div>
        </div>
           </div> 
      
        </div>
    );
};

export default Home;