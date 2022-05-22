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
                        <h4>Upload Document</h4>
                    </div>
                </div>
            </div>
            <div className='row mt-5 '>
                <div className='col-md-12'>
                    <h6>Upload the following documents (documents should be Notarized and self attested by the applicant)</h6>
                </div>             
            </div>
            <div className='row mt-4 align-items-center'>
                <div className='col-md-6'>
                    <p>Pan Card (company/ individual)</p>
                </div>
                <div className='col-md-6 text-right'>
                    <button type='file' className='btn btn-outline-success'>Browse</button>
                    <button type='button' className='btn btn-outline-primary'>Preview Image</button>
                </div>
            </div>
            <div className='row mt-4 align-items-center'>
                <div className='col-md-6'>
                    <p>Udyam Registration</p>
                </div>
                <div className='col-md-6 text-right'>
                    <button type='file' className='btn btn-outline-success'>Browse</button>
                    <button type='button' className='btn btn-outline-primary'>Preview Image</button>
                </div>
            </div>
            <div className='row mt-4 align-items-center'>
                <div className='col-md-7'>
                    <p>(BOD Resolution if company registered as Pvt. Ltd.) View sample Document / Partnership Deed/ Proprietorship Declaration</p>
                </div>
                <div className='col-md-5 text-right'>
                    <button type='file' className='btn btn-outline-success'>Browse</button>
                    <button type='button' className='btn btn-outline-primary'>Preview Image</button>
                </div>
            </div>
            <div className='row mt-4 align-items-center'>
                <div className='col-md-6'>
                    <p>Pan Card (company/ individual)</p>
                </div>
                <div className='col-md-6 text-right'>
                    <button type='file' className='btn btn-outline-success'>Browse</button>
                    <button type='button' className='btn btn-outline-primary'>Preview Image</button>
                </div>
            </div>
            <div className='row mt-4 align-items-center'>
                <div className='col-md-6'>
                    <p>Pan Card (company/ individual)</p>
                </div>
                <div className='col-md-6 text-right'>
                    <button type='file' className='btn btn-outline-success'>Browse</button>
                    <button type='button' className='btn btn-outline-primary'>Preview Image</button>
                </div>
            </div>
            <div className='row mt-4 align-items-center'>
                <div className='col-md-6'>
                    <p>Pan Card (company/ individual)</p>
                </div>
                <div className='col-md-6 text-right'>
                    <button type='file' className='btn btn-outline-success'>Browse</button>
                    <button type='button' className='btn btn-outline-primary'>Preview Image</button>
                </div>
            </div>
            <div className='row mt-4 align-items-center'>
                <div className='col-md-6'>
                    <p>Pan Card (company/ individual)</p>
                </div>
                <div className='col-md-6 text-right'>
                    <button type='file' className='btn btn-outline-success'>Browse</button>
                    <button type='button' className='btn btn-outline-primary'>Preview Image</button>
                </div>
            </div>
        </div>
      </div>
      <div className='container mt-3 mb-4'>
           <div className='order_summary'>
                <div className='row'>
                     <div className='col-12'>
                         <h6>Order Summary</h6>
                         <p><span>consultancy Fees</span><span className='price'><span>₹</span>394</span></p>
                         <p><span>consultancy Fees</span><span className='price'><span>₹</span>394</span></p>
                         <p className='total'><span><strong>Order Total:</strong> </span><span className='price'><strong><span>₹</span>700.00</strong></span></p>                    </div>
                </div>
           </div>
           <div className='row mb-5 mt-4'>
               <div className='col-12 text-right'>
                   <button type='button' className='btn btn-success'>Next</button>
               </div>
           </div>
      </div>
      </>
  )
}

export default Services;
