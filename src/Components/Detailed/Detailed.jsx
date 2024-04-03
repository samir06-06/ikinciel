import React from 'react'
import '../Detailed/Detailed.css'
import { useState } from 'react';

function Detailed() {

  return (
    <div id="detailed">
      <div className="display-item">
        <div className="display-img">
        <img src='' alt=''/>
        <p>The TerraVenture Waterproof Pro Jacket is your all-weather, all-adventure companion – ready to face whatever Mother Nature throws at you. Enjoy the great outdoors in comfort and style.</p>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" >Details</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" >Shipping</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" >Returns</a>
            </li>
            <p className='details'>
<b>100% Waterproof Material:</b> Engineered with our top-tiered Triple Seal Tech waterproof fabric, ensuring complete protection from rain and wet weather conditions.<br/>

<b>Windproof:</b> Effective in sealing out winds, it offers an additional layer of protection against harsh climates.<br/>

<b>Breathable Design:</b> Featuring our AeroFlow technology, this jacket prevents overheating and perspiration build-up, ensuring maximum comfort during long activities.<br/>

<b>Fully Sealed Seams</b> Every seam is fully sealed, offering an extra layer of defense against the leakage of water.<br/>

<b>Lightweight and Compact:</b> Even with its robust protection, our jacket maintains a light weight and can be easily packed into its pouch, perfect for backpacking, hiking, and travel.<br/>

<b>Durable:</b> Crafted with wear-resistant materials that withstand the test of time, ensuring longevity even in heavy use.<br/>

<b>Adjustable Hood and Cuffs:</b> Equipped with an adjustable, stow-away hood and Velcro cuffs for a custom fit and optimal protection against the elements.<br/>

<b>Roomy Pockets:</b> Features two zippered hand pockets and an internal pocket, providing secure storage for your essentials.<br/>

<b>YKK Zippers:</b> High-quality, industry-leading YKK zippers provide added water resistance and durability.<br/>

<b>Reflective Details:</b> Ensures increased visibility and safety during low-light outdoor adventures.<br/>

<b>Eco-friendly:</b> Made from 100% recycled materials, supporting our commitment to sustainability without compromising performance.<br/>

<b>Easy Care:</b> Machine-washable and quick-drying, ensuring easy care and maintenance.</p>
            <p className='shipping'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className='returns'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
            
        </ul></div>
        <div className="display-text">
            <h2>TerraVenture Waterproof Pro Jacket</h2>
            <h2>$ 89.99 USD</h2>
            <div className="stars-text">
                <div className="stars">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <p>{} stars</p>
                <p>{} reviews</p>
            </div> 
                <small><a>Add reviews to your Webflow ecommerce project </a><br/>
                    Aaron Grieve is in no way affiliated with Supersparks team or product.
                </small>
                 <h5>Quantity</h5>
                 
                 <input type="number" id="quantity" name="quantity" min="1" className='quantity'/>
                 
                 <button className='btn btn-primary bg-green'>ADD TO CARD</button>
                    
        </div>
    </div>
        
      </div>
  )
}

export default Detailed
