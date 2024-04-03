import React from 'react'
import { Link } from 'react-router-dom'
import EmailBtn from '../EmailBtn/EmailBtn'
import '../Faq/Faq.css'

function Faq() {
  return (
    <div id="faq">
        <div className="container">
            <div className="faq-top">
             <div className="chan">
                <ul>
                    <li>
                        <h5>Navigate</h5>
                        <a href="#">Home</a>
                        <a href="#">New in</a>
                        <a href="#">Store Locator</a>
                    </li>
                    <li>
                        <h5>Shop</h5>
                        <a href="#">By Activity</a>
                        <a href="#">Woman</a>
                        <a href="#">Men</a>
                        <a href="#">Rucksacks</a>
                        <a href="#">Footwear</a>
                    </li>
                    <li>
                        <h5>Account</h5>
                        <a href="#">Log in</a>
                        <a href="#">Create Account</a>
                        <a href="#">License & Assets</a>
                        <a href="#">Styleguide</a>
                        <a href="#">Changelog</a>
                    </li>
                    <li>
                        <h5>Care</h5>
                        <a href="#">Delivery</a>
                        <a href="#">Returns</a>
                        <a href="#">Size Guide</a>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="subscribe">
                <h3>Subscribe</h3>
                <p>Join our newsletter and get vouchers and exclusive deals straight to your inbox.</p>
                <EmailBtn text="SUBSCRIBE"/>
                <p>By subscribing you agree to with our <a href="#">Privacy Policy</a> and provide consent to receive updates from our company.</p>
            </div>
            </div>
            <div className="faq-bottom">
            <div className="faq-text">
                <ul>
                    <li>© Outventurist. All rights reserved.</li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Powered by Webflow</a></li>
                </ul>
            </div>
            <div className="icons">
                <Link><i class="fa-brands fa-facebook"></i></Link>
                <Link><i class="fa-brands fa-instagram"></i></Link>
                <Link><i class="fa-brands fa-twitter"></i></Link>
                <Link><i class="fa-brands fa-linkedin"></i></Link>
                <Link><i class="fa-brands fa-youtube"></i></Link>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Faq
