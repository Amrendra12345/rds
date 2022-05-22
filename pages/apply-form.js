import React from 'react'

const ApplyForm = () => {
  return (
    <>
     <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h4>Apply for Services</h4>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className='container my-5'>
          <div className='row'>
              <div className='col-12'>
                  <div className='category'>
                      <h4>Please Select Category</h4>
                  </div>
              </div>
              <div className='col-12'>
                       <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="category" id="category1" checked />
                        <label className="form-check-label" htmlFor="category1">9/3</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="category" id="category2"  />
                        <label className="form-check-label" htmlFor="category2">9/4</label>
                        </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default ApplyForm;
