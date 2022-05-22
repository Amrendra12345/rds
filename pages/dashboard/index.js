import Link from "next/link";

const chagepassword = () => {
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h4>My Dashboard</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 ">
            <div className="card">
              <div className="card-body p-0">
                <ul>
                  <li>
                    <a>User Profile</a>
                  </li>
                  <li> 
                    <Link href="/dashboard/orderhistory">
                    <a>Order History</a>
                     </Link>
                  </li>
                  <li>
                   <Link href="/dashboard/Changepassword">
                    <a className="active">Change Password</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7">
              <div className="card mb-5">
                  <div className="card-body">
                       <div className="title">
                           <h4>Change Password </h4>
                       </div>
                       <hr className="mb-4"/>
                       <form>
                           <div className="row mb-4">
                               <div className="col-12">
                                   <input type="password" className="form-control" placeholder="New Password" />
                               </div>
                           </div>
                           <div className="row mb-4">
                               <div className="col-12">
                                   <input type="password" className="form-control" placeholder="confirm Password" />
                               </div>
                           </div>
                           <div className="row mb-4">
                               <div className="col-12">
                                   <button type="button" className="btn btn-outline-success">Cancel</button>
                                   <button type="button" className="btn btn-success">Submit</button>
                                </div>
                           </div>
                           
                       </form>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chagepassword;
