import React from 'react'
import InfoFormContent1 from './infoForm_content1'
import InfoFormContent2 from './infoForm_content2'


export default function InfoFormContent(props:{isRow:any}) {
  const {isRow}=props
  return (
    <div className='infoForm-content'>
   {
      isRow ?
      <InfoFormContent1 /> :
     <InfoFormContent2 /> 
    }
    </div> 
  )
}
