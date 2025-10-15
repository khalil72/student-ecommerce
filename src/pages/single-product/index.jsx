import React from 'react'
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
     const {id} = useParams();
     
  return (
    <div className='container justify-content-center mt-5 align-items-center'>
         <div class="row">
    <div class="col-sm-4">
         <img src="/assets/images/about.jpg" alt="image"  className='image'/>
    </div>
    <div class="col-sm-8">
         <h4 className='title'>Title</h4>
               <p className=''>Description</p>
               <p className=''>Price</p>
    </div>
  </div>
        
      
    </div>
  )
}

export default SingleProduct
