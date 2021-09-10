import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import "../activity.css"
import "../experience.css"
 class Activity extends Component {
  render() {
    return (
      <div className="activity-container mt-3">
        <div  className="text-left ml-4 mr-4 mt-4 d-flex" style={{height:"24px"}}>
          <p className="mb-0 py-0">
            <h5 style={{fontWeight:"480"}}>Activity</h5>
          </p>
          <p className="ml-auto">Start a post</p>
          </div>
          <Link>
          <div  className="text-left ml-4 mr-4 d-flex followers">
            9 followers
          </div>
          </Link>
          <div className="text-left ml-4 mr-4 mt-2">
          <p style={{fontSize:"15px"}} >Posts you created, shared, or commented on in the last 90 days are displayed here.</p>
          </div>
          <hr className="mb-2"/>
          <div className="lighter-color-activity text-center  mt-1 mb-2">
            See all activity
          </div>
      </div>
    )
  }
}
export default Activity
