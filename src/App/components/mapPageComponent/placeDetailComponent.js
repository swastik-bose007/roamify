import React from 'react'

const PlaceDetailComponent = ({ place }) => {
  console.log(place.name)
  return (
    <>
      <h1>{ place.name }</h1>
    </>
  )
}

export default PlaceDetailComponent;