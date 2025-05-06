import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center my-3'>
          <div className='d-flex justify-content-start align-items-center'>
              <img className='object-fit-cover me-2 profile_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
            <h4>Harsh Patel</h4>
          </div>
          <div>
            <h4 className='mb-0'>RS 195.20</h4>
            <p className='mb-0 text-secondary fw-semibold'>Earned</p>
          </div>
        </div>
        <div style={{fontSize: '14px'}} className='d-flex justify-content-center align-items-start gap-3 bg-body-secondary rounded-3 pt-2'>
          <div className='text-center'>
            <i className="fs-1 ri-timer-2-line"></i>
            <h5 className='mb-0'>10.5</h5>
            <p className='text-secondary fw-semibold'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="fs-1 ri-speed-up-fill"></i>
            <h5 className='mb-0'>10.5</h5>
            <p className='text-secondary fw-semibold'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className="fs-1 ri-booklet-line"></i>
            <h5 className='mb-0'>10.5</h5>
            <p className='text-secondary fw-semibold'>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails