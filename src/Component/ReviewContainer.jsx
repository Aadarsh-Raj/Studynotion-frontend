import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import "./Style/reviewcontainer.css"
const ReviewContainer = () => {
    const [rating, setRating] = useState(0)
      // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <>
    <div className="review-container">
    <Rating onClick={handleRating} size={20} initialValue={rating} />

    </div>
    </>
  )
}

export default ReviewContainer
