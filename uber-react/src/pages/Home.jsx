import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmeRide from "../components/ConfirmeRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidPanel, setconfirmRidPanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          // opacity: 1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          // opacity: 0
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidPanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidPanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <>
      <style>
        {`
          .border-toggle {
            transition: border 0.3s ease;
            border: 2px solid #ddd; /* Default border */
          }

          .border-toggle:active {
            border: 2px solid black !important; /* Border color when clicked */
          }
          .translate-y {
            transform: translateY(100%);
          }
        `}
        {/* style={{transform: "translateY(100%)"}} */}
      </style>
      <div className="vh-100 position-relative overflow-hidden">
        <img
          className="w-25 p-3 position-absolute top-0 start-0"
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png"
          alt=""
        />

        <div
          onClick={() => {
            setVehiclePanel(false);
          }}
        >
          <img
            className="img-fluid w-100 vh-100 object-fit-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
        </div>

        <div className="position-absolute vh-100 top-0 w-100 d-flex flex-column justify-content-end">
          <div
            style={{ height: "30%" }}
            className="px-4 py-5 bg-white position-relative"
          >
            <h2
              ref={panelCloseRef}
              onClick={() => {
                setPanelOpen(false);
              }}
              className="position-absolute end-0 me-4"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h2>
            <h4>Find a trip</h4>
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="position-absolute ms-4 mt-4 py-4 border border-dark "></div>
              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                }}
                className="bg-secondary-subtle ps-5 py-1 rounded-2 w-100 mt-2 border"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                className="bg-secondary-subtle ps-5 py-1 rounded-2 w-100 mt-2 border"
                type="text"
                placeholder="Eneter your destination"
              />
            </form>
          </div>

{/* location */}
          <div ref={panelRef} style={{ height: "0%" }} className="bg-white">
            <LocationSearchPanel
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
            />
          </div>

{/* vehicle */}
          <div ref={vehiclePanelRef} className="position-fixed z-3 bottom-0 px-3 py-4 bg-white translate-y">
            <VehiclePanel setconfirmRidPanel={setconfirmRidPanel} setVehiclePanel={setVehiclePanel} />
          </div>

{/* confirmed  */}
          <div ref={confirmRidePanelRef} className="position-fixed z-3 bottom-0 px-3 py-4 bg-white translate-y">
            <ConfirmeRide setconfirmRidPanel={setconfirmRidPanel} setvehicleFound={setvehicleFound} />
          </div>

{/* wating for driver */}
          <div ref={vehicleFoundRef} className="position-fixed z-3 bottom-0 px-3 py-4 bg-white translate-y">
              <LookingForDriver setvehicleFound={setvehicleFound} />
          </div>

{/* waiting for driver  */}
{/* translate-y */}
          <div ref={waitingForDriverRef} className="position-fixed z-3 bottom-0 px-3 py-4 bg-white">
              <WaitingForDriver waitingForDriver={waitingForDriver} />
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
