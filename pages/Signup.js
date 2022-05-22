import Link from 'next/link';

const Signup = () => {
  return (
    <section className="resetPassword">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 img_section">
            <div className="imgReset">
              <img src="/img/signUp.png" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="reset_content">
              <div className="row">
                <div className="col-9">
                  <div className="title">
                    <h4>Signup</h4>
                    <p>Create new account here</p>
                  </div>
                  <form>
                       <div className="mb-3">
                           <label className="form-label">Name</label>
                           <input type="text" className="form-control" />
                       </div>
                       <div className="mb-3">
                           <label className="form-label">Email</label>
                           <input type="email" className="form-control" />
                       </div>
                       <div className="mb-3">
                          <label className="form-label">Phone Number</label>
                          <input type="text" className="form-control" />
                       </div>
                       <div className="mb-3">
                           <label className="form-label">New Password</label>
                           <input type="password" className="form-control" />
                       </div>
                       <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <input type="password" className="form-control" />
                       </div>
                       <div className="mb-4 d-grid">
                         <Link href="/Loginpage">
                          <button type="button" className="btn btn-success">Login </button>
                          </Link>
                       </div>
                       <div className='mb-5'>
                            <p className='signUp'>Already have an account?<a>SignIn</a> </p>
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

export default Signup;
