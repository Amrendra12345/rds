import React from 'react'

const Services = () => {
  return (   
     <>
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h4>Apply Services</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mb-4'>
        <div className='services'>
            <div className='row'>
                <div className='col-12'>
                    <div className='heading'>
                        <h4>Please fill the information carefully, this will be shown in your certificate of registration</h4>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <label htmlFor='pancard'>Applicant Name(Shoulbe match in Pan card)</label>
                    <input type="text" className="form-control" id="pancard" />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='dob'>Applicant Date of Birth(Shoulbe match in Pan card)</label>
                    <input type="text" className="form-control" id="dob" />
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-12'>
                    <label htmlFor='pancard'>Applicant Father's Name(Shoulbe match in Pan card)</label>
                    <input type="text" className="form-control" id="pancard" />
                </div>                
            </div>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <label htmlFor='pancard'>Company Name (Shoulbe match in Udyam Certificate )</label>
                    <input type="text" className="form-control" id="pancard" />
                </div>
                <div className='col-md-6'>
                    <label htmlFor='pancard'>Company GST No. (For Billing Purpose)</label>
                    <input type="text" className="form-control" id="pancard" />
                </div>                
            </div>
            <div className='row mt-4'>
                <div className='col-md-12'>
                    <label htmlFor='pancard'>Office address (Shoulbe match in Udyam Certificate)</label>
                    <input type="text" className="form-control" id="pancard" />
                </div>                               
            </div>
            <div className='row mt-4 mb-3'>
                <div className='col-md-12'>
                    <label htmlFor='pancard'>Factory address (Shoulbe match in Udyam Certificate)</label>
                    <input type="text" className="form-control" id="pancard" />
                </div>                               
            </div>
        </div>
      </div>
      <div className='container my-4'>
           <div className='order_summary'>
                <div className='row'>
                     <div className='col-12'>
                         <h6>Order Summary</h6>
                         <p><span>consultancy Fees</span><span className='price'><span>₹</span>394</span></p>
                         <p><span>consultancy Fees</span><span className='price'><span>₹</span>394</span></p>
                         <p className='total'><span><strong>Order Total:</strong> </span><span className='price'><strong><span>₹</span>700.00</strong></span></p>                    </div>
                </div>
           </div>           
      </div>
      <div className='container mb-5'>
          <div className='paymetMethod'>
              <div className='row align-items-center'>
                  <div className='col-md-6'>
                      <p>Select Payment Method</p>
                  </div>
                  <div className='col-md-6 text-right'>
                      <button type='button' className='btn btn-outline-success'>Net Banking/UPI/Offline</button>
                  </div>
              </div>
          </div>
      </div>
      </>
  )
}

export default Services;
