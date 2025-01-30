import React from 'react'

export const PriceCard = () => {
  return (
    <>
    <div className="content flex mtop">
        {Price.map((item, index) => {
        return <div className="box shadow">
            <div className="topbtn">
                <button className='btn3'>{item.best}</button>
            </div>
        </div>
    }

    )}
    </div>
    </>
  )
}
