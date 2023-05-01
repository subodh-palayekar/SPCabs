import React from 'react'
import  "./Card.css";
import{GiPathDistance} from "react-icons/gi";
import{AiOutlineClockCircle} from "react-icons/ai";

const Card = ({image,distance,time}) => {

    

  
    return(
    < >
        <div  className="card">
        <div className="upper">
            <img className='card-image' src={image}/>
        </div>
        <div className="lower">
            <div className='distance'><span> Distance </span><span><GiPathDistance/></span><span>{distance} km</span></div>
            <div className="time"><span> Duration </span><span><AiOutlineClockCircle/></span><span>{time} hrs</span></div>
        </div>
        </div>
        
    </>
    )
 
    

  
}

export default Card
