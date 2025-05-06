import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <h5 className="text-center" onClick={() => { 
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
            }} ><i className="text-body-tertiary ri-arrow-down-wide-line"></i></h5>
        <h3 className="mb-3">Confirm this ride to Start!</h3>
        <div className='d-flex justify-content-between align-items-center my-3 bg-warning p-2 rounded-3'>
          <div className='d-flex justify-content-start align-items-center'>
              {/* <img className='object-fit-cover me-2 profile_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" /> */}
              <img className='object-fit-cover me-2 profile_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5TmPdRp9mhJQ4Unm0a8Bh0OXTRWHMNz0hQ&s" alt="" />
            <h5 className='mb-0'>Harshi Patel</h5>
          </div>
          <div>
            <h5 className='mb-0 fw-bold'>2.2 KM</h5>
            {/* <p className='mb-0 text-secondary fw-semibold'>Earned</p> */}
          </div>
        </div>
        <div>
            <div className='w-100 mt-2 mb-4'>
                <div className='d-flex align-items-center gap-3 py-2 border-bottom'>
                    <i className="fs-3 ri-map-pin-user-fill"></i>
                    <div>
                        <h5 className='mb-0'>562/11-A</h5>
                        <p className='mb-0'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-3 py-2 border-bottom'>
                    <i className="fs-3 ri-map-pin-2-fill"></i>
                    <div>
                        <h5 className='mb-0'>562/11-A</h5>
                        <p className='mb-0'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-3 py-2'>
                    <i className="fs-3 ri-currency-line"></i>
                    <div>
                        <h5 className='mb-0'>RS 192.20</h5>
                        <p className='mb-0'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    {/* <input type="text" placeholder='Enter OTP' className="bg-secondary-subtle px-4 py-1 rounded-2 w-100 mt-2 border" /> */}
                    <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" placeholder='Enter OTP' className="bg-secondary-subtle px-4 py-1 rounded-2 w-100 mt-2 border" />
                    <div className='d-flex w-100 gap-3 mt-3'>
                        <button onClick={() => {
                            props.setConfirmRidePopupPanel(false)
                            props.setRidePopupPanel(false)
                        }} className='btn btn-danger w-50'>Cancel</button>

                        <Link to='/captain-riding' className='btn btn-success w-50'>Confirm</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp