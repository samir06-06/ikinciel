import React from 'react'
import '../Card2/Card2.css'
import EmailBtn from '../EmailBtn/EmailBtn'
function Card2() {
  return (
    <>
      <div className="row">
  <div className="col">
    <div className="card1 card2">
      <div className="card-body-main card-body-2">
        <h6 className="card-title-main card-title-2">Enjoy 10% OFF your<br/> first order</h6>
        <p className="card-text-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="mail-body">
        <div className="bg-blur">
          <EmailBtn text="GET CODE"/>
          <p>By clicking Sign Up you're confirming that you agree with our <a href="#">Terms and Conditions.</a></p>
        </div>
      </div>
    </div>
  </div>
</div>   
    </>
  )
}

export default Card2
