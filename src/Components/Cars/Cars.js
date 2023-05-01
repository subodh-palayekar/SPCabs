import React from 'react'
import './Cars.css';
import amaze from "../assets/car/amaze.jpg"
import brezza from "../assets/car/brezza.jpg"
import Dzire from "../assets/car/Dzire.jpg"
import fortuner from "../assets/car/fortuner.jpg"
import Toyota from "../assets/car/Toyota Fortuner.jpg"
import wagonr from "../assets/car/wagonr.jpg"
import ertiga from "../assets/car/ertiga.jpg"
import honda from "../assets/car/honda.jpg"

const Cars = () => {
  return (
    <>
    <div id='cars' className="cars-container-title">Cars</div>
    <div className="cars-container">
        <div className="cars-inner">
            <div className=" cLevel">
                <div className="cars">
                    <div className="cars-photo"><img src={ertiga} alt="" /></div>
                    <div className="cars-name">Ertiga</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={brezza} alt="" /></div>
                    <div className="cars-name">Maruti Brezza</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={Dzire} alt="" /></div>
                    <div className="cars-name">Suzuki Dzire</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={fortuner} alt="" /></div>
                    <div className="cars-name">Fortuner</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={honda} alt="" /></div>
                    <div className="cars-name">Honda Amaze</div>
                </div>
                <div className="cars">
                    <div className="cars-photo"><img src={wagonr} alt="" /></div>
                    <div className="cars-name">WagonR</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cars
