import { FiPlusCircle } from "react-icons/fi";

const UserProfile = () => {
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
          <div className="col-md-3">
            <div className="card">
              <div className="card-body p-0">
                <ul>
                  <li>
                    <a className="active">User Profile</a>
                  </li>
                  <li>
                    <a>Order History</a>
                  </li>
                  <li>
                    <a>Change Password</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card mb-5">
              <div className="card-body">
                <div className="title d-flex justify-content-between align-items-center">
                  <h4> User Profile </h4>
                  <h6>
                    <FiPlusCircle /> Add Profile
                  </h6>
                </div>
                <hr className="mb-4" />
                <div className="user_profile">
                  <div className="row">
                    <div className="col-md-6 pt-3">
                      <p>
                        <span> Applicant Name </span>{" "}
                        <span>
                          {" "}
                          <strong>Amrendra kumar</strong>
                        </span>
                      </p>
                      <p>
                        <span> Father Name </span>{" "}
                        <span>
                          {" "}
                          <strong>Amrendra kumar</strong>
                        </span>
                      </p>
                      <p>
                        <span> GST </span>{" "}
                        <span>
                          {" "}
                          <strong> AGFDKSK894994589</strong>
                        </span>
                      </p>
                    </div>
                    <div className="col-md-5 offset-md-1 pt-3">
                      <p>
                        <span> DOB </span>{" "}
                        <span className="text-right">
                          {" "}
                          <strong>05/02/1991</strong>
                        </span>
                      </p>
                      <p>
                        <span> Company Name </span>{" "}
                        <span className="text-right">
                          {" "}
                          <strong>xyz Pvt.Ltd</strong>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="title">
                        <h5>Uploaded Document </h5>
                      </div>
                      <div className="upload">
                        <label>
                          <input type="file" className="form-control" />
                          <span>Pan Card</span>
                        </label>
                        <label>
                          <input type="file" className="form-control" />
                          <span>Udyam Registration</span>
                        </label>
                        <label>
                          <input type="file" className="form-control" />
                          <span>Udyam Registration</span>
                        </label>
                        <label className="mr-0">
                          <input type="file" className="form-control" />
                          <span>Udyam Registration</span>
                        </label>
                      </div>
                      <div className="officeAddress">
                        <div className="row">
                          <div className="col-12">
                            <div className="title">
                              <h5>office Address : </h5>
                            </div>
                            <p>
                              Logix Park A-4-5, Sector-15,Noida Uttar Pradesh
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="officeAddress">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="title">
                              <h5>office Address : </h5>
                            </div>
                            <p>
                              Logix Park A-4-5, Sector-15,Noida Uttar Pradesh
                            </p>
                          </div>
                          <div className="col-md-4 edit_btn">
                            <div>
                              <button
                                type="button"
                                className="btn btn-outline-success"
                              >
                                Edit profile
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
