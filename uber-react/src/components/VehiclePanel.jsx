import React from 'react'

const VehiclePanel = (props) => {

  return (
    <div>
        <h5 className="text-center" onClick={() => { 
                props.setVehiclePanel(false); 
            }} ><i className="ri-arrow-down-wide-line"></i></h5>
        <h3 className="mb-3">Choose a Vehicle</h3>
        <div onClick={() => {
            props.setconfirmRidPanel(true)
        }} className="d-flex justify-content-between align-items-center p-1 border-toggle rounded-3 my-2">
            <img className="w-25" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
            <div className="w-50">
                <h5 className="my-0">UberGo{" "}<span><i className="ri-user-3-fill"></i>4</span></h5>
                <h6 className="my-0">2 mins away</h6>
                <p className="my-0" style={{ fontSize: "13px" }}>Affordable, compact rides</p>
            </div>
            <h6>RS 193.20</h6>
        </div>
        <div onClick={() => {
            props.setconfirmRidPanel(true)
        }} className="d-flex justify-content-between align-items-center p-1 border-toggle rounded-3 my-2">
            <img className="w-25" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className="w-50">
                <h5 className="my-0"> Moto{" "} <span> <i className="ri-user-3-fill"></i>1</span></h5>
                <h6 className="my-0">3 mins away</h6>
                <p className="my-0" style={{ fontSize: "13px" }}>Affordable, motorcycle rides</p>
            </div>
            <h6>RS 65.17</h6>
        </div>
        <div onClick={() => {
            props.setconfirmRidPanel(true)
        }} className="d-flex justify-content-between align-items-center p-1 border-toggle rounded-3 my-2">
            <img className="w-25" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className="w-50">
                <h5 className="my-0">UberAuto{" "} <span><i className="ri-user-3-fill"></i>3</span></h5>
                <h6 className="my-0">2 mins away</h6>
                <p className="my-0" style={{ fontSize: "13px" }}>Affordable, Auto rides</p>
            </div>
            <h6>RS 118.21</h6>
        </div>
    </div>
  )
}

export default VehiclePanel