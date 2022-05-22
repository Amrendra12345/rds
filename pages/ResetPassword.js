import {useState} from "react";

const ResetPassword = () => {
  const [newPass, setNewpass] = useState('swatiSingh');
  const [confirmPass, setconfirmpass] = useState('swatiSingh');
  
  return (
    <section className="resetPassword">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 img_section">
            <div className="imgReset">
              <img src="/img/Reset_Password.png" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="reset_content">
              <div className="row">
                <div className="col-9">
                  <div className="title">
                    <h4>Reset Password</h4>
                    <p>Enter your email for Reset your password</p>
                  </div>
                  <form>
                       <div className="mb-3">
                           <label className="form-label">New Password</label>
                           <input type="password" className="form-control" value={newPass} 
                            onChange={(e)=>setNewpass(e.target.value)}
                           />
                       </div>
                       <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <input type="password" className="form-control" value={confirmPass}
                           onChange={(e)=>setconfirmpass(e.target.value)}
                          />
                       </div>
                       <div className="mb-3 d-grid">
                          <button type="button" className="btn btn-success">Submit </button>
                       </div>
                   </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
