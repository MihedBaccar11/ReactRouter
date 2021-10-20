import React from "react";
import Rating from 'react-simple-star-rating'
 


function Rate({setRating,rate}){

  const handleRating = (rate) => {
    setRating(rate)
  }
 
  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
       value={rate}
        size={20}
        // label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' 
      />
    </div>
  )
}
export default Rate;