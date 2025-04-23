import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="container-fluid p-0 m-0">
                <div style={{
                            // backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRpL2omODVIhWuAUlFfL0ByQka0lxnz3BQw&s')",
                            backgroundImage: "url('data:image/png;base64,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')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }} className="w-100 min-vh-100 bg-danger-subtle d-flex justify-content-between flex-column">
                    <img className="w-25 p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyt2BJXvUVkS1OU1ozPy7yzZesBdZaIwT_Ig&s" alt="" />
                    <div className="bg-white py-3 px-4">
                        <h3 className="fw-bold">Get Started With Uber</h3>
                        <Link to='/login' className="btn rounded w-100 bg-black text-white mt-2 fs-5">Continue</Link>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Home;



// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home