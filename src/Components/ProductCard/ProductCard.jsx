import React from 'react'
import { Link } from 'react-router-dom'
import "../ProductCard/ProductCard.css"

function ProductCard() {
  return (
      <div className="card-item">
        <Link to="/product"><img src="..." className="card-img-top" alt=""/></Link>
        <div className="card-body-item">
            <h5 className="card-title-item">Card title</h5>
            <h5 className="card-price-item">$ 88.90 USD </h5>
            <button className='sale-button'>SEE DETAILS</button>
        </div>
    </div>
    
  )
}

export default ProductCard
