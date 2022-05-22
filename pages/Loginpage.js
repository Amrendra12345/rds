import Link from 'next/link';
import {useState} from 'react'

const Loginpage = () => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  return (
    <section className="resetPassword">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 img_section">
            <div className="imgReset">
              <img src="/img/login.png" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="reset_content">
              <div className="row">
                <div className="col-9">
                  <div className="title">
                    <h4>Welcome Back</h4>
                    <p>Welcome Black ! Please enter your details.</p>
                  </div>
                   <form>
                       <div className='row mb-3'>
                          <div className='col-12'>
                          <label className="form-label">Email</label>
                           <input type="email" className="form-control" 
                             onChange={(e)=>setemail(e.target.value)} value={email} />
                          </div>
                       </div>
                       <div className='row mb-3'>
                          <div className='col-12'>
                          <label className="form-label">Password</label>
                           <input type="Password" className="form-control" 
                             onChange={(e)=>setpass(e.target.value)} value={pass} />
                          </div>
                       </div>
                       <div className='row mb-3'>
                          <div className='col-md-6'>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" 
                                id="remPass"/>
                              <label className="form-check-label" htmlFor="remPass"> Remember Password </label>
                            </div>
                          </div>
                          <div className='col-md-6'>
                             <Link href="/">
                               <a className='forgot_pass'>Forgot Password</a>
                             </Link>
                          </div>
                       </div>
                       <div className='row mb-4'>
                           <div className='col-12 d-grid'>
                           <Link href="/Loginpage">
                              <a type="button" className="btn btn-success">Login </a>
                          </Link>
                           </div>
                       </div>
                       <div className='row'>
                       <div className='col-12 mb-3'>
                            <p className='signUp'>Don't have an account? 
                              <Link href="/Signup">
                                <a>SignUp</a>
                             </Link>
                            </p>
                       </div>
                       </div>
                   </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Loginpage;
