import React from 'react'

export default function LegoCard({lego}) {
  return (
    <>
      <img src={lego.image} alt={lego.name}/>
      <h1>{lego.name}</h1>
      <h3>{lego.description}</h3>
    </>
  )
}
