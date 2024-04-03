import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import '../AllProducts/AllProducts.css'

function AllProducts({type}) {
  return (
    <>
    <div className="search-h3">
        <h2 className='new-in'>{type}</h2>
        <div className="search">
          <div class="d-flex form-inputs">
            <input class="form-control" type="text" placeholder="Search any product..."/>
            <span className="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
          </div>
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

export default AllProducts
