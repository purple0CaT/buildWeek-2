import { useState, useEffect } from "react";
import {Link, withRouter} from 'react-router-dom'
import "../experience.css"

 const Experience = () => {
 
const [userExperience, setExperience]= useState([])
const token = process.env.REACT_APP_TOKENACCESS;

useEffect(() => {
  fetch();
  console.log("Mounted", userExperience )
}, []);

const fetch = async () => {
  try {
    let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/5fc4af0bb708c200175de88e/experiences"         
       ,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.ok) {
      let data = await response.json();
      console.log("THIS IS EXPERIENCE", data )
      // let newData = await data[0]
      // console.log("NEW DATA", newData)
      setExperience({data})
      
    } else {
      console.log("Error");
    }
  } catch (erorr) {}
}
 
    return (
      <>
      <div className="experience-container mt-3">
        <div className="text-left ml-4 mr-4 mt-4">
        <h3> { userExperience.role } </h3>
        <div> {userExperience.company}</div>
        <div> {userExperience.startDate } - {userExperience.endDate} </div>
        <div>{userExperience.area} </div>
        <div>{userExperience.description} </div>
        </div>
      </div>
      </>
    )
  
}
export default withRouter(Experience)