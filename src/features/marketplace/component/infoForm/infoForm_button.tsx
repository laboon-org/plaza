import React from 'react'
import './infoForm_button.scss'

export default function InfoFormBtn(props:{backgroundBtn:any, textBtn:any}) {
    const {
        backgroundBtn,
        textBtn
    }=props
  return (
    <div id='infoForm-button'>
        <img className='infoForm-button__background' src={backgroundBtn} alt="" />
        <div className='button-content'>
            <p className='button-content--text'>{textBtn}</p>
            <img className='button-content--icon' src="" alt="" />
        </div>
    </div>
  )
}
