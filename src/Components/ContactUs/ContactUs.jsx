import React from 'react'
import '../ContactUs/ContactUs.css'
import { Link } from 'react-router-dom'
function ContactUs() {
  return (
    <div id="contact">
        <div className="info">
            <h1>Contact Us</h1>
            <p>Get in touch, we respond to all emails within 48 hours.</p>

            <ul className="contact-info">
               <li>
                    <i></i><p>contact@outventurist.com</p>
                </li> 
               <li>
                    <i></i><p>+1 (555) 123-4567</p>
                </li> 
               <li>
                    <i></i><p>69 Queensway, London, N15 6VG</p>
                </li> 
            </ul>
            <p>Or find us on social media</p>
            <div className="icons">
                <Link><i class="fa-brands fa-facebook"></i></Link>
                <Link><i class="fa-brands fa-instagram"></i></Link>
                <Link><i class="fa-brands fa-twitter"></i></Link>
                <Link><i class="fa-brands fa-linkedin"></i></Link>
                <Link><i class="fa-brands fa-youtube"></i></Link>
            </div>
        </div>
        <div className="input">
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Last Name</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
  <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Billing Issue</option>
            <option>Returns</option>
            <option>Press Question</option>
            <option>Other</option>
        </select>
    </div>
<h5>Which best describes you?</h5>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
<div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>
  <div class="col-12">
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
        </div>
    </div>
  )
}

export default ContactUs
