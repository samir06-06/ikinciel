import React from 'react'
import '../UserUX/UserUX.css'
import ProductCard from '../ProductCard/ProductCard'
function UserUX() {

    function checkSelection() {
        var selectElement = document.querySelector('.form-select');
        var selectedValue = selectElement.value;
        
        if (selectedValue === selectedValue) {
          alert('Please select an option!');
        }
      }
  return (
    <>
    <div id='user-ux' className='container'>
        <div className="user-main">
            <div className="user-img"><img src="" alt="" />
            <input type="file" className='pic-input'/></div>
        <div className="user-basic-info">
            <p>UserName: </p>
            <p>Email: </p>
            <p>Posts: </p>
        </div>
        </div>
        <div className="user-second">
        <ul class="nav nav-tabs" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="icon-tab-0" data-bs-toggle="tab" href="#icon-tabpanel-0" role="tab" aria-controls="icon-tabpanel-0" aria-selected="true"><i class="fa-solid fa-plus"></i> Create</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="icon-tab-1" data-bs-toggle="tab" href="#icon-tabpanel-1" role="tab" aria-controls="icon-tabpanel-1" aria-selected="false"><i class="fa-solid fa-cubes"></i> Posts</a>
  </li>
  {/* <li class="nav-item" role="presentation">
    <a class="nav-link" id="icon-tab-2" data-bs-toggle="tab" href="#icon-tabpanel-2" role="tab" aria-controls="icon-tabpanel-2" aria-selected="false"><i class="fa-regular fa-bookmark"></i> Favorites</a>
  </li> */}
</ul>
<div class="tab-content pt-5" id="tab-content">
  {/* <div class="tab-pane " id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">
    <button className='btn btn-primary bg-green'><i class="fa-solid fa-plus"></i> Create A New Post </button>
  </div> */}
  <div class="tab-pane active" id="icon-tabpanel-1" role="tabpanel" aria-labelledby="icon-tab-1">
  <div className="row row-cols-1 row-cols-md-3 g-5">
  <div className="col">
  <ProductCard/>
  </div>
  <div className="col">
  <ProductCard/>
  </div>
  <div className="col">
  <ProductCard/>
  </div>
  
</div>
  </div>
  {/* <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Content of Tab 3</div> */}
</div>
        </div>
    
    <div className="editing">
    <form>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
    </div>
    <div className="get-code"><button className="btn btn-primary bg-green">Submit</button></div>
  </div>
</form>
    </div>  
    <div className="create-post">
        <form>
        <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Item Name </label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Price </label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="staticEmail"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Catagory </label>
    <div class="col-sm-10">
    <select class="form-select" aria-label="Default select example">
        <option selected disabled>...</option>
        <option value="1">Pant</option>
        <option value="2">Shirt</option>
        <option value="3">Shoe</option>
    </select>    </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Condition </label>
    <div class="col-sm-10">
    <select class="form-select" aria-label="Default select example" onchange={checkSelection}>
        <option selected disabled>...</option>
        <option value="1">New/Never Worn</option>
        <option value="2">Gently Used</option>
        <option value="3">Very Worn</option>
    </select>     </div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Size:  </label>
    <div class="col-sm-10">
    <select class="form-select" aria-label="Default select example" onchange={checkSelection}>
        <option selected disabled>...</option>
        <option value="1">XS</option>
        <option value="1">S</option>
        <option value="2">M</option>
        <option value="3">L</option>
        <option value="3">XL</option>
    </select>    </div>
  </div>
  <div class="form-group row">
    
    <div className="get-code"><button className="btn btn-primary bg-green">Post</button></div>
  </div>
        </form>
    </div>

    </div>
    </>
    
   )
}

export default UserUX
