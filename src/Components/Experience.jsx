import { useState, useEffect } from "react";
import {Link, withRouter} from 'react-router-dom'
import { format, parseISO } from "date-fns"
import "../experience.css"
import AddExperience from "./AddExperience"
import EditExperience from "./EditExperience"

const Experience = () => {
 
const [userExperience, setExperience]= useState([])
const token = process.env.REACT_APP_TOKENACCESS;
// const fetchedUserId = ""

useEffect(() => {
  fetchExp();
  console.log("Mounted", userExperience )
  // console.log("USER ID", userExperience[0].user)
  // fetchedUserId = userExperience[0].user
  // console.log("FETCHED USER ID",fetchedUserId)
}, []);

const fetchExp = async () => {
  try {
    let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/6135e0aa7be6c10015f9db9c/experiences"         
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
        <div  className="text-left mt-4 d-flex">
          
           <h5>Experience</h5>
        
          <div className="d-flex ml-auto">
           <AddExperience userId={userExperience.map((exp) => (exp.user))} /> 
          </div>
        </div>
       
        {
          userExperience.map((exp) => (

        <div className="text-left ml-4 mt-3">
           <div  className="text-left ml-4 d-flex" style={{height:"15px"}} >
          <h6 className="my-0 py-0"> { exp.role } </h6>
          <div className="d-flex ml-auto">
           <EditExperience userId={exp.user} expId={exp._id}/>
          </div>
        </div>
        
        <div className="text-left ml-4 my-0"> {exp.company}</div>
            {/* {format(exp.startDate,'MMM'-'yyyy')} - {format(exp.endDate, 'MMM'-'yyyy')} */}
        {/* <div className="lighter-color">{${format(parseISO(exp.startDate), MMM-yyyy)} - ${format(parseISO(exp.endDate),MMM-yyyy)}}</div> */}
        <div className="lighter-color text-left ml-4 my-0 py-0">{exp.area} </div>
          <div className="text-left ml-4">
          {exp.description}
           </div>
          <hr/> 
        </div>

          ))
        }
        </div>
      </div>
      </>
    )
  
}
export default withRouter(Experience)