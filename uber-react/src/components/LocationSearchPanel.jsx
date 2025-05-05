import React from 'react'

const LocationSearchPanel = (props) => {
    // console.log(props)

    const locations = [
        "54B, Vijay Nagar Square, Best Cpanies For IT Sector, Indore",
        "52c, Bhawarkua Square, Best Cpanies For IT Sector, Indore",
        "58B, Tawar Square, Best Cpanies For IT Sector, Indore",
        "50A, RajivGandhi Nagar Square, Best Cpanies For IT Sector, Indore",
    ]
  return (
    <div>
        <style>
            {`
                .border-toggle {
                    transition: border 0.3s ease;
                    border: 2px solid #eae5e5db; /* Default border */
                }

                .border-toggle:active {
                    border: 2px solid black !important; /* Border color when clicked */
                }
            `}
        </style>
        {
            locations.map(function(ele, ind) {
                return <div key={ind} onClick={() => {
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='d-flex justify-content-start align-items-center gap-3 mb-2 border-toggle p-2 rounded'>
                    <h4 className='p-1 rounded-5 text-secondary bg-secondary-subtle'><i className="ri-map-pin-fill"></i></h4>
                    <h6>{ele}</h6>
                </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel