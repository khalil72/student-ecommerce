import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item , index}) => {
    console.log("item==>" , item)
  return (
   <div className="card shadow" key={index}>
  <img src={item?.images[0]} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item?.title}</h5>
   
    <Link to={`/product/${item?.id}`} className="btn btn-primary ">See Detail</Link>
  </div>
</div>
  )
}

export default ProductCard
