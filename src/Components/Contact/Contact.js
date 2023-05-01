import React from 'react'
import './Contact.css'
import {RiCustomerService2Fill} from "react-icons/ri"
import {GiCartwheel} from "react-icons/gi"
import {MdSecurity} from "react-icons/md"
import {BiNews} from "react-icons/bi"


const Contact = () => {
  return (
    <>
    <div className="contact-headline" id='contact'>Contact US</div>
    <div className="contact-container">
        <div className="contact-inner">
            <div className="contact-upper">
                <div className="contact-upper-left">
                    <div className="contact-img"><RiCustomerService2Fill/></div>
                    <div className="contact-info">
                        <div className="contact-info-title">Customer Support</div>
                        <div className="contact-info-desc">For Support with yur bookings and other queries call +91 9921456324</div>
                    </div>
                </div>
                <div className="contact-upper-right">
                <div className="contact-img"><BiNews/></div>
                    <div className="contact-info">
                        <div className="contact-info-title">Media related queries</div>
                        <div className="contact-info-desc">For press and media related queries please reach out to +91 9568746312</div>
                    </div>
                </div>
            </div>
            <div className="contact-lower">
            <div className="contact-lower-left">
                    <div className="contact-img"><MdSecurity/></div>
                    <div className="contact-info">
                        <div className="contact-info-title">Customer security</div>
                        <div className="contact-info-desc">If you have security concerns, please report your issue to +91 9921456324</div>
                    </div>
                </div>
                <div className="contact-lower-right  drive">
                <div className="contact-img"><GiCartwheel/></div>
                    <div className="contact-info">
                        <div className="contact-info-title">Drive for Us</div>
                        <div className="contact-info-desc">if you are a driver or a fleet manager and want to attach your vehicle with us call +91 9921456324</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
