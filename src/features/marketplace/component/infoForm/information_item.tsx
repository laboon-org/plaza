import React from 'react'


export default function InformationItem(props:{iconItem:any, parameter:any}) {
    const {iconItem,parameter}=props
  return (
    <div className='information-item'>
        <img src={iconItem} alt="" />
        <p>{parameter}</p>
    </div>
  )
}
