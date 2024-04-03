import React from 'react'
import '../SignUp/SignUp.css'

function SignUp({onToggleForm}) {
  return (
    <div className='sign-login'>
     <section class="vh-100 bg-image">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-end align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div class="form-outline mb-2">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">&nbsp;&nbsp;&nbsp;UserName</label>
                </div>

                <div class="form-outline mb-2">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">&nbsp;&nbsp;&nbsp;Email</label>
                </div>

                <div class="form-outline mb-2">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">&nbsp;&nbsp;&nbsp;Password</label>
                </div>
                
                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
        Have already an account?{' '}
        <a className="fw-bold text-body" onClick={onToggleForm}>
          Login here
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

export default SignUp
