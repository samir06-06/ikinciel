import React from 'react'
import ByActivity from '../Components/ByActivity/ByActivity'
import Card1 from '../Components/Card1/Card1'
import Card2 from '../Components/Card2/Card2'
import Faq from '../Components/Faq/Faq'
import Navbar from '../Components/Navbar/Navbar'
import New_In from '../Components/New-In/New-In'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Card1/>
        <New_In/>
        <Card2/>
        <ByActivity/>
      </div>
        <Faq/>
    </div>
  )
}

export default HomePage
