import React from 'react'
import '../SignUp/SignUp.css'

function LogIn({onToggleForm}) {
  return (
    <div className='sign-login'>
     <section class="vh-100 bg-image">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-end align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Enter your account</h2>
              <form>
                <div class="form-outline mb-2">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">&nbsp;&nbsp;&nbsp;UserName</label>
                </div>

                <div class="form-outline mb-2">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">&nbsp;&nbsp;&nbsp;Password</label>
                </div>
                
                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Log In</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
        Don't have an account?{' '}
        <a className="fw-bold text-body" onClick={onToggleForm}>
          Signup here
        </a>
      </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
     </section> 
    </div>
  )
}

export default LogIn
