import React, { Component } from 'react'
import "../activity.css"
import "../experience.css"
 class Activity extends Component {
  render() {
    return (
      <div className="activity-container mt-3">
        <div  className="text-left ml-4 mr-4 mt-4 d-flex">
          <p className="mb-0 py-0">
            <h5>Activity</h5>
          </p>
          <p className="ml-auto">Start a post</p>
          </div>
          <div  className="text-left ml-4 mr-4 d-flex followers">
            9 followers
          </div>
          <div className="text-left ml-4 mr-4">
          <p>Posts you created, shared, or commented on in the last 90 days are displayed here.</p>
          </div>
          <hr className="mb-2"/>
          <div className="lighter-color text-center  mt-1 mb-2 font-weight-bolder">
            See all activity
          </div>
      </div>
    )
  }
}
export default Activity
