import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {

  const [quotes,setQuotes]=useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/quotes")
  .then(Response => Response.json())
  .then(data => setQuotes(data.quotes.splice(0,10)))
  

  },[])
  
  return (
    <div>
      <h1 className='head'>Famous Quotes</h1>
      {quotes.map((quot)=>
      <div className='main'  key={quot.id}>
      <h2 className='person'>{quot.author}</h2>
      <h4 className='text'>{quot.quote}</h4>
      </div>
      )}
    
      
     
    </div>
  )
}

export default App