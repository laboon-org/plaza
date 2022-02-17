import React from 'react'

export default function Item(props:{number:any,image:any}) {
    const {number,
    image} = props
  return (
    <div className='item'>
        <img src={image} alt="" />
        <p>{number}</p>
    </div>
  )
}
