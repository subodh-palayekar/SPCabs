import Book from "./Components/Banner/Book";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Highlight from "./Components/HighLight/Highlight";
import Slider from "./Components/Carousel/Slider";
import Form from "./Components/Form/Form"
import { BookContext } from "./Utils/BookContext";
import Contact from "./Components/Contact/Contact";
import Cars from "./Components/Cars/Cars";



function App() {

  const[pickUp,setPickUp] = useState("");
  const[drop,setDrop] = useState("");
  const[passenger,setPassenger] = useState(1);
  const[date,setDate] = useState("");
  const[time,setTime] = useState("");
  const[phoneNum,setPhoneNum] = useState(0);
  const[book,setBook] = useState(false);

  
  return (
    <div className="App">
      <BookContext.Provider 
      value={{pickUp,setPickUp,
      drop,setDrop,
      passenger,setPassenger,
      date,setDate,
      time,setTime,
      phoneNum,setPhoneNum,
      book,setBook}}>
      <Navbar/>
      <Form/>
      <Slider/>
      <Highlight/>
      <Cars/>
      <Contact/>
      </BookContext.Provider>
      
    </div>
  );
}

export default App;
