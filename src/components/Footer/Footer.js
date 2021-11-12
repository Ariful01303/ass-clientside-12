import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        
   <footer className="bg-dark p-4 text-center w-100% text-white">
 
  <div className="container p-4 pb-0">
     <h4>Contract Us</h4>
    <section className="mb-4">
      
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#3b5998"}}
        href="#!"
        role="button"
        ><i className="fab fa-facebook-f"></i
      ></a>

     
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#55acee"}}
        href="#!"
        role="button"
        ><i className="fab fa-twitter"></i
      ></a>
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#dd4b39"}}
        href="#!"
        role="button"
        ><i className="fab fa-google"></i
      ></a>

    
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#ac2bac"}}
        href="#!"
        role="button"
        ><i className="fab fa-instagram"></i
      ></a>

    
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#0082ca"}}
        href="#!"
        role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>
      
      <a
        className="btn btn-primary btn-floating m-1"
        style={{backgroundColor: "#333333"}}
        href="#!"
        role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
   
  </div>
  <form action="">
        
        <div class="row d-flex justify-content-center">
          
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          

         
          <div class="col-md-5 col-12">
           
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example2" class="form-control" />
              <label class="form-label" for="form5Example2">Email address</label>
            </div>
          </div>
         

       
          <div class="col-auto">
           
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
       
        </div>
      
      </form>


  <div className="text-center copyright p-3">
    © 2020 Copyright:
    <a className="text-white" href="/#">BD_Bike.com</a>
  </div>
 
</footer>
        
    );
};

export default Footer