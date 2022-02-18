import React from 'react'
import Background_numberPage from '../../../../image/background_numberPage.png'


export default function InfoFormPageNumbers(props:{text:any}) {
    const {text}=props
  return (
    <div className='infoForm-footer__element--number'>
    <img src={Background_numberPage} alt="" />
    <p>{text}</p>
  </div>
  )
}
