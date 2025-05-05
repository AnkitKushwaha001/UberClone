import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
        <h5 className="text-center" onClick={() => { 
                props.waitingForDriver(false); 
            }} ><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className="mb-3">Wating For a Driver</h3>
        <div>
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
        </div>
    </div>
  )
}

export default WaitingForDriver