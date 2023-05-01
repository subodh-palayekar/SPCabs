import {React , useContext,useState,useRef } from 'react'
import "./Form.css"
import { GrLocation } from 'react-icons/gr';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { MdPhoneIphone } from 'react-icons/md';
import { BookContext } from '../../Utils/BookContext';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


const Form = () => {
 
  const {pickUp,setPickUp} = useContext(BookContext);
  const{drop,setDrop} = useContext(BookContext);
  const{passenger,setPassenger} =useContext(BookContext);
  const{date,setDate} = useContext(BookContext);
  const{time,setTime} = useContext(BookContext);
  const{phoneNum,setPhoneNum} =useContext(BookContext);
  const{book,setBook} =useContext(BookContext);


  
  const customerInfo = {
      
    pickup:pickUp,
    drop:drop,
    passenger:passenger,
    date:date,
    time:time,
    number:phoneNum,
  };
  var details={};
  const sendData = ()=>{
    
    if(book==true){
      details = customerInfo;
      setBook(false);

      swal({
        title: "Booking Done",
        text: "Details has been send",
        icon: "success",
        button: "OK",
      });
    }
    
     emailjs.send('service_a8aq0nf', 'template_ltka82e', details, 'TF97rD08c0YDaQ_c8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    
  }

   book && sendData();
  

 

  return (
    <div className="form-container" id='form'>
      
      <div className="form-inner">
        <div className="form-top fl">
          <div className="form-pickup fi">
            <GrLocation/>
            <input type="text" placeholder='Pick Up' name="pickup" autoComplete='off'
            onChange={(event)=>{setPickUp(event.target.value);}}
          /></div>
          <div className="form-drop fi"><GrLocation/><input type="text" placeholder='Drop' name="drop"  autoComplete='off'
          onChange={(event)=>{setDrop(event.target.value);}}
          /></div>
          <div className="form-passenger fi"><MdOutlinePeopleAlt/><input type="text" placeholder="No of Passengers"  name="passenger"  autoComplete='off'
            onChange={(event)=>{setPassenger(event.target.value);}}
          /></div>
        </div>
        <div className="form-bottom fl">
          <div className="form-data fi fil "><input type="date" name="date" onChange={(event)=>{setDate(event.target.value);}}/></div>
          <div className="form-time fi fil "><input type="time" name="time" onChange={(event)=>{setTime(event.target.value);}} /></div>
          <div className="form-number fi fil"><MdPhoneIphone/><input type="number" placeholder='99XXXXXXXX' name="number"  autoComplete='off'  
            onChange={(event)=>{setPhoneNum(event.target.value);}}
          /></div>
        </div> 
      </div>
      <div  className="form-book fi"  onClick={()=>setBook(true)}  >Book</div>
    </div>
  )
}

export default Form
