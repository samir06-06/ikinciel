import React from 'react'
import AllProducts from '../Components/AllProducts/AllProducts'
import ByActivity from '../Components/ByActivity/ByActivity'
import Card2 from '../Components/Card2/Card2'
import Faq from '../Components/Faq/Faq'
import Navbar from '../Components/Navbar/Navbar'

function NewIn() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <AllProducts type={'New In'}/>
        <Card2/>
        <ByActivity/>
      </div>
      <Faq/>
    </div>
  )
}

export default NewIn
