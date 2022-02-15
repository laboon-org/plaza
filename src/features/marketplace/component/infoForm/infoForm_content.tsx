import React from 'react'
import InfoFormElement from './infoForm_element'
import './infoForm_content.scss'

// import image
import iconItem1 from '../../../../image/image_infoForm/icon_attact1.png'

export default function InfoFormContent() {
  return (
    <div className='infoForm-content'>
        <InfoFormElement iconItem1={iconItem1}
        iconItem2={iconItem1}
        iconItem3={iconItem1}
        iconItem4={iconItem1}
        iconItem5={iconItem1}
        iconItem6={iconItem1}
        parameter1={50}
        parameter2={50}
        parameter3={50}
        parameter4={50}
        parameter5={50}
        parameter6={50} />
    </div>
  )
}
