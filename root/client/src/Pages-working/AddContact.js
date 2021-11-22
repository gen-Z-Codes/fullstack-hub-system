import React from 'react'

export default function AddContact() {
  return (
    <div>

       <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Add Contact</title>
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
        <link rel="stylesheet" href="/assets/fonts/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/fonts/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/fonts/material-icons.min.css" />
        <link rel="stylesheet" href="/assets/fonts/fontawesome5-overrides.min.css" />
        <link rel="stylesheet" href="/assets/css/styles.min.css" />
        <div id="wrapper">
          <div className="d-flex flex-column" id="content-wrapper" style={{backgroundColor: 'rgba(50, 50, 50, 0.1)'}}>
            <div id="content">
              <div className="container-fluid">
                <div className="row mb-3" style={{display: 'flex', flex: 1}}>
                  <div className="col d-flex flex-column align-items-center">
                    <div className="card shadow mb-3" />
                    <div className="card shadow">
                      <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">New Customer Details</p>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="mb-3">
                            <label className="form-label" style={{marginBottom: '0rem'}} htmlFor="BioDetails">
                              <strong>Bio Details</strong></label>
                            <input className="form-control custDet " style={{margin: '0rem 0rem 0.5rem 0rem'}} type="text" id="surname" placeholder="Surname" name="address" required />
                            <input className="form-control custDet custDet" type="text" id="othernames" placeholder="Other Names" name="OtherNames" required />
                            <input className="form-control custDet custDet" type="date" id="dob" placeholder="DOB" name="Date Of Birth" required />
                            <label className="form-label" style={{marginBottom: 0, marginTop: '1rem'}} htmlFor="organization">
                              <strong>Organization</strong><br />
                            </label>
                            <input className="form-control custDet" type="text" id="address-1" placeholder="Student" name="organization" />
                          </div>
                          <label className="form-label" style={{marginBottom: 0, marginTop: '1rem'}} htmlFor="address">
                            <strong>Contact Details</strong>
                          </label>
                          <input className="form-control custDet" type="tel" id="tel" placeholder="Mobile Number" name="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                          <input className="form-control custDet" type="emailaddress" id="emailaddress" placeholder="Email address" name="emailaddress" />
                          <label className="form-label" style={{marginBottom: 0, marginTop: '1rem'}} htmlFor="address">
                            <strong>Assign group</strong>
                          </label>
                          <input className="form-control custDet" type="text" id="groupAss" placeholder="Group +" name="address" />
                          <div className="row">
                            <div className="col">
                              <div className="mb-3">
                                <label className="form-label" style={{marginBottom: 0, marginTop: '1rem'}} htmlFor="city"><strong>City</strong></label><input className="form-control custDet" type="text" id="city" placeholder="Accra" name="city" />
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <label className="form-label" style={{marginBottom: 0, marginTop: '1rem'}} htmlFor="country"><strong>District</strong></label><input className="form-control custDet" type="text" id="District" placeholder="Ga East" name="district" />
                              </div>
                            </div>
                          </div>
                          <label className="form-label" htmlFor="city"><strong>Notes</strong></label><textarea className="form-control custDet" defaultValue={""} />
                          <div className="mb-3" />
                        </form>
                        <div className="btn-group d-flex" role="group">
                          <a className="btn btn-danger btn-icon-split" role="button" id="closeAddContact" style={{position: 'relative', maxWidth: '7rem'}}>
                            <span className="text-white-50 icon">
                              <i className="fas fa-times" />
                            </span>
                            <span className="text-white text">Cancel</span>
                          </a>
                          <a className="btn btn-success btn-icon-split" role="button" style={{marginLeft: '1rem', maxWidth: '7rem'}}>
                            <span className="text-white-50 icon">
                              <i className="fas fa-check" />
                            </span>
                            <span className="text-white text">Add</span>
                          </a>
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
  )
}

