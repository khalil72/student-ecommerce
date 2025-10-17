import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner'
import AboutComponent from '../../components/about'
import ProductCard from '../../components/cards'
import ClientReviews from '../../components/client-reviews'


const HomePage = () => {
  const [data , setData] = useState();
  const url ="https://dummyjson.com/products";
  useEffect(()=>{
    const fetchData =async()=>{
      try {
         const req = await fetch(url);
         const res = await req.json();
         
         setData(res?.products);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  },[])
  return (
    <>
    <Banner />
    <AboutComponent />
   
    <div className="container mb-5 justify-content-center align-items-center">
      <h4 className='title text-center'>Our Products</h4>
      <div className="row">
        {data?.slice(0,8).map((item ,index)=>(
          <div className="col-12 col-sm-6 col-md-3  mb-4">
           <ProductCard item={item} index={index}/>
          </div>

        ))}

       
        
      </div>
    </div>
    <ClientReviews />
    
    </>
  )
}

export default HomePage
