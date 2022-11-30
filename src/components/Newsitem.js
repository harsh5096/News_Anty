// import React, { Component } from 'react'
// import './style.css'

// export class Newsitem extends Component {
//   render() {
//     let {title, description, imageurl, newsUrl, author, date} = this.props;
//     return (
//         <div className="container my-5"  >
//        <div className='my-2'>
//         <div className="card" >
//         <img src={!imageurl?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg":imageurl} className="card-img-top" alt="..."/>
//         <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
//         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary"> Read More</a>
//       </div>
//       </div>
//       </div>
//       </div>
//     )
//   }
// }

// export default Newsitem


import React from 'react'
import './style.css'

const Newsitem = (props)=> {
    let {title, description, imageurl, newsUrl, author, date} = props;
    return (
        <div className="container my-4s"  >
       <div className='my-2'>
        <div className="card" >
        <img src={!imageurl?"https://phandroid.com/wp-content/uploads/2022/08/samsung-galaxy-z-fold-4-review-1-640x427.jpg":imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary"> Read More</a>
      </div>
      </div>
      </div>
      </div>
    )
  }
export default Newsitem