import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
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
        .profile_img {
          width: 45px;
          height: 45px;
          border-radius: 100%;
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
        <div className='map-img'>
            <img className="img-fluid w-100 h-100 object-fit-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>

 {/* captain details  */}
        <div className='p-4 profile'>
          <CaptainDetails />            
        </div>

{/* ride pupup */}
        <div ref={ridePopupPanelRef} className="position-fixed z-3 bottom-0 px-3 py-4 bg-white w-100 translate-y">
          <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
        </div>

{/* confirm ride pupup */}
        <div ref={confirmRidePopupPanelRef} className="position-fixed z-3 min-vh-100 bottom-0 px-3 py-4 bg-white w-100 translate-y">
          <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
        </div>
      </div>
    </>
  )
}

export default CaptainHome