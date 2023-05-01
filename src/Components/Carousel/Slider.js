import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import "./Slider.css";
import BangOt from "../assets/routes/BangOt.png"
import ChanShm from "../assets/routes/ChanShm.png"
import ChenPond from "../assets/routes/ChenPond.png"
import ChenVel from "../assets/routes/ChenVel.png"
import DelChan from "../assets/routes/DelChan.png"
import DelJaip from "../assets/routes/DelJaip.jpg"
import DelPun from "../assets/routes/DelPun.png"
import MumGoa from "../assets/routes/MumGoa.png"
import MumPun from "../assets/routes/MumPun.png"





const Slider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 560 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 560, min: 0 },
          items: 1
        }
      };
      
  const sliderData = [
    {
      id:1,
      title:"Mumbai Pune",
      image:MumPun,
      distance:"153",
      time:"3",
    },
    {
      id:2,
      title:"Delhi Jaipur",
      image:DelJaip,
      distance:"310",
      time:"5",
    },
    {
      id:3,
      title:"Delhi Chandigarh",
      image:DelChan,
      distance:"246",
      time:"5",
    },
    {
      id:4,
      image:BangOt,
      title:"Banglore Ooty",
      distance:"275",
      time:"6",
    },
    {
      id:5,
      image:ChenVel,
      title:"Chennai Vellore",
      distance:"137",
      time:"3",
    },
    {
      id:6,
      title:"Chennai Pondicherry",
      image:ChenPond,
      distance:"150",
      time:"3",
    },
    {
      id:7,
      title:"Chandigarh Shimla",
      image:ChanShm,
      distance:"112",
      time:"3",
    },
    {
      id:8,
      title:"Delhi Punjab",
      image:DelPun,
      distance:"377",
      time:"7",
    },
    {
      id:9,
      title:"Mumbai Goa",
      image:MumGoa,
      distance:"586",
      time:"11",
    },
  ]


  const data = sliderData.map((item)=>(
    <Card image={item.image} distance={item.distance} time={item.time}/>
  ))


  return (
    <div id='top-routes'  className='container-carousel' >
      <div className="carousel-title">Top Routes</div>
      <Carousel  infinite={true} autoPlay={true} autoPlaySpeed={3000} responsive={responsive}>
        {data}
      </Carousel>
    </div>
  )
}

export default Slider
