import { useState, useEffect } from "react";
import {Link, withRouter} from 'react-router-dom'
import { format, parseISO } from "date-fns"
import "../experience.css"

 const Experience = () => {
 
const [userExperience, setExperience]= useState([])
const token = process.env.REACT_APP_TOKENACCESS;

useEffect(() => {
  fetchExp();
  console.log("Mounted", userExperience )
}, []);

const fetchExp = async () => {
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
      setExperience(data)
      
    } else {
      console.log("Error");
    }
  } catch (erorr) {}
}
 
    return (
      <>
      <div className="experience-container mt-3">
        <div className="text-left ml-4 mr-4 mt-4 mb-3">
        <h5>Experience</h5>
        {
          userExperience.map((exp) => (

        <div className="text-left ml-4 mr-4 mt-4">
        <h6> { exp.role } </h6>
        <div> {exp.company}</div>
        {/* <div className="lighter-color">{${format(parseISO(exp.startDate), MMM-yyyy)} - ${format(parseISO(exp.endDate),MMM-yyyy)}}</div> */}
        <div className="lighter-color">{exp.area} </div>
          <div>
            <ul>
            <li>{exp.description}</li>
            </ul> 
           </div>
        </div>

          ))
        }
        </div>
      </div>
      </>
    )
  
}
export default withRouter(Experience)