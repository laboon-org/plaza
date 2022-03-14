import React from 'react'
import './infoForm_button.scss'

export default function InfoFormBtn(props:{backgroundBtn:any, textBtn:any,idActive:any}) {
    const {
        backgroundBtn,
        textBtn,
        idActive
    }=props
  return (
    <div id='infoForm-button'>
      {
        idActive ?
        <img className='infoForm-button__background' src={backgroundBtn} alt="" /> :
        <img className='infoForm-button__background' src={backgroundBtn} alt="" />
      }

        <div className='button-content'>
            <p className='button-content--text'>{textBtn}</p>
            <img className='button-content--icon' src="" alt="" />
        </div>
    </div>
  )
}
