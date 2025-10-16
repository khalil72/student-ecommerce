import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item , index}) => {
    
  return (
   <div className="card shadow" key={index}>
  <img src={item?.images[0]} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{item?.title.slice(0,20)}...</h5>
   
    <Link to={`/product/${item?.id}`} >
    <button className='btn btn-success mx-auto d-flex justify-content-center'>
      See Detail

    </button>
    </Link>
  </div>
</div>
  )
}

export default ProductCard
