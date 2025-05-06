import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='vh-100'>
        <Link to='/home' className='position-fixed bg-white d-flex justify-content-center fw-normal fs-1 rounded-5 end-0 me-2 mt-2 text-decoration-none text-black'>
            <i className="px-2 ri-home-5-line"></i>
        </Link>
        <div className='h-50'>
            <img className="img-fluid w-100 h-100 object-fit-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-50 p-4'>
            <div className='w-100 d-flex justify-content-center'>
              <div className='w-50'>
                <img className="w-100" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
              </div>
              <div className='text-end'>
                <h5 className='mb-1'>Ankit</h5>
                <h4 className='mb-0'>MP15 AK00-0 </h4>
                <p style={{fontSize: '14px'}}>White Suzuki S-Presso LXI</p>
              </div>
            </div>
            <div className='w-100 mt-2 mb-4'>
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
            <button className='btn btn-success w-100'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding