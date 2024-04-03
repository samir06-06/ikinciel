import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import '../New-In/New-In.css'

function New_In() {
  return (
    <>
    <div className="search-h3">
        <div className='new-in-see-all'>
            <h2 className='new-in'>New In</h2>
            <a href="#">SEE ALL🡢</a>
        </div>
        
    </div>
      <div className="row row-cols-1 row-cols-md-3 g-5">
  <div className="col">
  <ProductCard/>
  </div>
  <div className="col">
  <ProductCard/>
  </div>
  <div className="col">
  <ProductCard/>
  </div>
  
</div>
    </>
  )
}

export default New_In
