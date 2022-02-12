import React from 'react'
import InfoFormElement from './infoForm_element'
import './infoForm_content.scss'

// import image
import iconItem1 from '../../../../image/image_infoForm/icon_attact1.png'

export default function InfoFormContent() {
  return (
    <div className='infoForm-content'>
        <InfoFormElement iconItem1={iconItem1} parameter1={50} />
    </div>
  )
}
