import React from 'react'

const ConfirmeRide = (props) => {
  return (
    <div>
        <h5 className="text-center" onClick={() => { 
                props.setconfirmRidPanel(false); 
            }} ><i className="text-body-tertiary ri-arrow-down-wide-line"></i></h5>
        <h3 className="mb-3">Confirm your Ride</h3>
        <div>
            <div className='w-100 d-flex justify-content-center'>
                <img className="w-75" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
            </div>
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
            <button onClick={() => {
                props.setvehicleFound(true)
                props.setconfirmRidPanel(false)
                }} className='btn btn-success w-100'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmeRide