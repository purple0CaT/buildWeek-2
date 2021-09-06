import React, { Component } from 'react'
import "../activity.css"
 class Activity extends Component {
  render() {
    return (
      <div className="activity-container mt-3">
        <div  className="text-left ml-4 mr-4 mt-4 d-flex">
          <p>
            <h5>Activity</h5>
          </p>
          <p className="ml-auto">Start a post</p>
          </div>
          <div  className="text-left ml-4 mr-4 mt-4 d-flex followers">
            9 followers
          </div>
      </div>
    )
  }
}
export default Activity
