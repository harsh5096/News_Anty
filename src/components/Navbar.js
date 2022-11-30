//using class componenet
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// export class Navbar extends Component {
//   render() {
//     return (
//       <div>
// <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-fluid">
//     <Link className="navbar-brand mx-2" href="/">News-Anty</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkto">
//       <div className="navbar-nav ">
//         <Link className="nav-link mx-2" aria-current="page" to="/">Home</Link>
//         <Link className="nav-link" to="/business">Business</Link>
//         <Link className="nav-link" to="/entertainment">Entertainment</Link>
//         <Link className="nav-link" to="/general">General</Link>
//         <Link className="nav-link" to="/health">Health</Link>
//         <Link className="nav-link" to="/science">Science</Link>
//         <Link className="nav-link" to="/sports">Sports</Link>
//         <Link className="nav-link" to="/technology">Technology</Link>
//       </div>
//     </div>
//   </div>
// </nav>

//       </div>
//     )
//   }
// }

// export default Navbar


import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand mx-4" href="/">News-Anty</Link>
  <button className="navbar-toggler mx-4" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
  <div  className=" navbar-nav mx-3 ">
              <Link className="nav-link mx-2" aria-current="page" to="/">Home</Link>
               <Link className="nav-link"  to="/business">Business</Link>
               <Link className="nav-link"  to="/entertainment">Entertainment</Link>
               <Link className="nav-link"  to="/general">General</Link>
               <Link className="nav-link"  to="/health">Health</Link>
               <Link className="nav-link"  to="/science">Science</Link>
               <Link className="nav-link"  to="/sports">Sports</Link>
               <Link className="nav-link"  to="/technology">Technology</Link>
             </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

