import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const SingleProduct = () => {
     const {id} = useParams();
     const [loading ,setLoading] = useState(true);
   
       const [singleData , setSingleData] = useState();
       const url ="https://dummyjson.com/products/";
       useEffect(()=>{
         const fetchData =async()=>{
           try {
              const req = await fetch(url + id);
              const res = await req.json();
              setLoading(true)
              setSingleData(res)
           } catch (error) {
             console.log(error)
           }
           finally {
               setLoading(false)
           }
         };
         fetchData();
       },[]);

      
     
  return (
     <>
     {loading ? "loading" : <>
             <div className='container justify-content-center mt-5 align-items-center'>
         <div class="row">
    <div class="col-sm-4">
     <div className="card">
           <img src={singleData?.images[0]} alt="image"  className='image '/>
     </div>
        
    </div>
    <div class="col-sm-8">
         <h4 className='title'>{singleData?.title}</h4>
              
           <p><strong>Price</strong>${singleData?.price} </p>
               <p className=''>{singleData?.description}</p>
               <p><CiStar /></p>

              
    </div>
  </div>
        
      
    </div>

    <div className='mt-5'>
     <h4 className='title text-center'>Reviews</h4>
     <div className='container'>
          <div className="row row-cols-3">
               {singleData.reviews?.map((item)=>(
                    <>
                    <div className='col col-span-4'>
                         <div className="card">
                              <img src=""  alt="image" />
                         </div>
                    </div>
                    <div className='col col-span-8'>
                         <div className="card">
                              <p>{item?.rating}</p>
                           <p>
                              {item?.comment}
                           </p>
                         </div>
                    </div>
                    </>
               ))}
          </div>

     </div>


    </div>
          </> }
          </>
 
  )
}

export default SingleProduct
