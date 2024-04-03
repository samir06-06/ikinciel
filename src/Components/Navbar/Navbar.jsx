import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import luxury from '../../Assets/luxury.jpg'
import sport from '../../Assets/sport.jpg'
import streetwear from '../../Assets/streetwear.jpg'
import { useEffect } from 'react'


function Navbar() {
  useEffect(() => {
    const activityTag = document.querySelector('.justify-content-end').children[2];
    const activity = document.querySelector('.activity');
  
    // Function to show activity
    const showActivity = () => {
      activity.style.display = 'block';
    };
  
    // Function to hide activity
    const hideActivity = () => {
      activity.style.display = 'none';
    };
  
    // Add mouseover event listener to activityTag to show activity
    activityTag.addEventListener('mouseover', showActivity);
  
    // Add mouseleave event listener to activity to hide activity
    activity.addEventListener('mouseleave', hideActivity);
  
    // Cleanup event listeners when component unmounts
    return () => {
      activityTag.removeEventListener('mouseover', showActivity);
      activity.removeEventListener('mouseleave', hideActivity);
    };
  }, []);
  return (
    <div id='navbar' >
  <div className="container">
      <div className="navbar">
        <div className='icon-first'>
          <Link to="/">
            <i class="fa-solid fa-face-smile"></i>
          </Link>
          <Link to="/">
            <span>
              <h3>OUTVENTURIST</h3>
              <p>OUTDOOR GEAR <span>SINCE</span> 1996</p>
            </span>
          </Link>
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="/newin">New in</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/shop">Shop</a>
          </li>
          <li className="nav-item has-border">
            <a className="nav-link" href="#">Activity</a>
            <div className="activity">
              <div className="activity-trios"><div class="card mb-3" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={luxury} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Luxury</h5>
        <a href="#">Check It Out→</a>
      </div>
    </div>
  </div>
</div><div class="card mb-3" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={sport} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Sport</h5>
        <a href="#">Check It Out→</a>
      </div>
    </div>
  </div>
</div><div class="card mb-3" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={streetwear} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Street Wear</h5>
        <a href="#">Check It Out→</a>
      </div>
    </div>
  </div>
</div></div>
            </div>
          </li>
          <li className="nav-item ">
            <a className="nav-link bold" href="/contact">CONTACT</a>
          </li>
          <li className="nav-item bg-cream">
              <div className="basket-card">
                <div className="your-basket">
                  <div className="upper-part">
                    <h2>Your Bakset</h2>
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                  <div className="middle-part">
                    <div className="basket-produkt">
                      <div className="basket-img"><img src="" alt="" /></div>
                      <div className="basket-text">
                        <h4>Hiking Trail Trousers</h4>
                        <p>$ 89.99 USD</p>
                      </div>
                    </div>
                    <div className="basket-quantity">
                     <div className="quantity-remove">
                      <input type="number" id="quantity" name="quantity" min="1" className='quantity'/>
                      <button className='btn btn-primary bg-green remove'>remove</button>
                     </div>
                    </div>
                  </div>
                  <div className="below-part">
                    <p className="subtotal">Subtotal</p>
                    <h2 className='basket-final-price'>88.90$</h2>
                  </div>
                </div>


              </div>
            <a className="nav-link" href="#"><div className='basket'>
              <i class="fa-solid fa-basket-shopping"></i><span className='bold'>1</span></div></a>
          </li>
          <li className="nav-item bg-cream">
            <a className="nav-link" href="/signlogin"><i class="fa-regular fa-user"></i></a>
          </li>
          <li className="nav-item bg-cream">
            <a className="nav-link" href="/user">user</a>
          </li>
      </ul>
    </div>
  </div>
    <div className="free-shipping">
      <span><i class="fa-solid fa-van-shuttle"></i> &nbsp;Free Shipping</span> on all orders over $50
    </div>
    <div className="container">

    </div>
      
      
    
    </div>
  )
}

export default Navbar
