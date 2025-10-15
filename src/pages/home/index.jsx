import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner'
import AboutComponent from '../../components/about'
import ProductCard from '../../components/cards'

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
      <div className="row row-cols-4   ">
        {data?.map((item ,index)=>(
          <>
           <ProductCard item={item} index={index}/>
          </>

        ))}

       
        
      </div>
    </div>
    
    </>
  )
}

export default HomePage
