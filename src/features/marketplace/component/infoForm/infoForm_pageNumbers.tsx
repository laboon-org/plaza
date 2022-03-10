import React from 'react'
import Background_numberPage from '../../../../image/background_numberPage.png'
import pageActive_image from '../../../../image/image_infoForm/page-active.png'


export default function InfoFormPageNumbers(props:{text:any,pageActive:any}) {
    const {text,pageActive}=props
  return (
    <div id={pageActive} className='infoForm-footer__element--number'>
      {
        pageActive ?
        <img src={pageActive_image} alt="" /> :
        <img src={Background_numberPage} alt="" />
      }

    <p>{text}</p>
  </div>
  )
}
