import React from 'react'
import './Book.css'
import { GrLocation } from 'react-icons/gr';


const Book = () => {

       
      
  return (
    <div className="hero-container">
        <div className="pick-up action">
            <GrLocation/>
            <input type="text" placeholder='Pick up Location' autoFocus/>
        </div>
        <div className="drop action">
        <GrLocation/>
            <input type="text" placeholder='Drop Location' autoFocus/>
        </div>
        <div className="date-time">
            <input type="date" />
            
        </div>
        <div className="book">
            book
        </div>
    </div>
  )
}

export default Book;
