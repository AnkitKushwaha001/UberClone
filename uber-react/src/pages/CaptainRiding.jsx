import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(
        function () {
          if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(0%)",
            });
          } else {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [finishRidePanel]
      );

  return (
        <>
            <style>
            {`
                .map-img {
                height: 63%
                }
                .profile {
                height: 37%
                }
            `}
            </style>
            <div className='vh-100'>
                <div className='position-fixed d-flex justify-content-between align-items-center'>
                    <img className='w-25 p-3' src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png" alt="" />
                    <Link to='/home' className=' bg-white fw-normal fs-1 rounded-5 me-2 mt-2 text-decoration-none text-black'>
                        <i className="px-2 ri-logout-box-r-line"></i>
                    </Link>
                </div>
                <div className='h-75'>
                    <img className="img-fluid w-100 h-100 object-fit-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
                </div>

                <div className='p-4 h-25 bg-warning d-flex justify-content-between align-items-center position-relative' onClick={() => {
                    setFinishRidePanel(true)
                }}>
                    <h5 className="text-center position-absolute top-0 start-0 w-100" onClick={() => { 
                        
                    }} ><i className="text-body-tertiary ri-arrow-down-wide-line"></i></h5>
                    <h4>4 KM away</h4>   
                    <button className='btn btn-success w-50'>Complete Ride</button>
                </div>
                <div ref={finishRidePanelRef} className="position-fixed z-3 bottom-0 px-3 py-4 bg-white w-100 translate-y">
                    <FinishRide setFinishRidePanel={setFinishRidePanel} />
                </div>
            </div>
        </>
  )
}

export default CaptainRiding