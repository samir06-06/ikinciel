import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Faq from '../Components/Faq/Faq'
import ContactUs from '../Components/ContactUs/ContactUs'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <ContactUs/>
      </div>
      <Faq/>
    </div>
  )
}

export default Contact
