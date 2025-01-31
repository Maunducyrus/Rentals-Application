import React from 'react'

export const Back = () => {
  return (
    <>
    <div className="back">
        <div className="container">
            <span>{name}</span>
            <h1>{title}</h1>
        </div>
        <img src={cover} alt="" />
    </div>
    </>
  )
}
