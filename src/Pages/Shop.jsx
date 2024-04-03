import React from 'react'
import AllProducts from '../Components/AllProducts/AllProducts'
import ByActivity from '../Components/ByActivity/ByActivity'
import Card2 from '../Components/Card2/Card2'
import Faq from '../Components/Faq/Faq'
import Navbar from '../Components/Navbar/Navbar'

function Shop() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <AllProducts  typ={'Shop'}/>
        <Card2/>
        <ByActivity/>
      </div>
      <Faq/>
    </div>
  )
}

export default Shop
