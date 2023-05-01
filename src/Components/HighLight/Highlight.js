import React from 'react'
import './Highlight.css'

import {BsCurrencyRupee} from "react-icons/bs"
import {AiOutlineCar} from "react-icons/ai"
import {HiOutlineUserGroup} from "react-icons/hi"
const Highlight = () => {
  return (
    <>
    <div className="container">
        <div className="left">
            <div className="left-inner">
                <div className="icon">
                 <BsCurrencyRupee/>
                </div>
                <div className="headline">offer's you Best Fare</div>
                <div className="desc">Specify a ride fare and accept a suitable offer</div>
            </div>
        </div>
        <div className="center">
        <div className="left-inner">
                <div className="icon">
                 <AiOutlineCar/>
                </div>
                <div className="headline">Choose a driver</div>
                <div className="desc">You see driver's rating and number of rides before you accept the offer</div>
            </div>
        </div>
        <div className="right">
        <div className="left-inner">
                <div className="icon">
                 <HiOutlineUserGroup/>
                </div>
                <div className="headline">Share your ride with others</div>
                <div className="desc">Shared rides are even more profitable:you pay only for you seat</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Highlight
