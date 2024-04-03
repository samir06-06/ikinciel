import React from 'react'
import Detailed from '../Components/Detailed/Detailed'
import Faq from '../Components/Faq/Faq'
import Navbar from '../Components/Navbar/Navbar'

function Product() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Detailed/>
      </div>
      <Faq/>
    </div>
  )
}

export default Product
