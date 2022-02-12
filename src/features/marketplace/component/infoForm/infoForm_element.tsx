import React from 'react'
import a from '../../../../image/a.png'
import image_level from '../../../../image/level.png'
import InformationItem from './information_item'

export default function InfoFormElement(props:{iconItem1:any, iconItem2:any,iconItem3:any,iconItem4:any,iconItem5:any,iconItem6:any,
  parameter1:any,parameter2:any,parameter3:any,parameter4:any,parameter5:any,parameter6:any}) {
  const {iconItem1, iconItem2,iconItem3,iconItem4,iconItem5,iconItem6,
    parameter1,parameter2,parameter3,parameter4,parameter5,parameter6}=props
  return (
    <div className='infoForm-element'>
        <div className='infoForm-element--frame'>
        <div className='information'>
        <div className='information-left'>
            <div className='information-left__id'>
            sấdfregrdfgdfghfd
            </div>
            <div className='information-left__level'>
              <p>Gen 2</p>
              <img src={image_level} alt="" />
            </div>
            <img className='information-left__image' src={a} alt="" />
        </div>
        <div className='information-right'>
          <InformationItem iconItem={iconItem1} parameter={parameter1}/>
          <InformationItem iconItem={iconItem2} parameter={parameter2}/>
          <InformationItem iconItem={iconItem3} parameter={parameter3}/>
          <InformationItem iconItem={iconItem4} parameter={parameter4}/>
          <InformationItem iconItem={iconItem5} parameter={parameter5}/>
          <InformationItem iconItem={iconItem6} parameter={parameter6}/>
        </div>
        </div>
        <div className='price'>

        </div>
        <div className='infoForm-element__button'>

        </div>
        </div>
    </div>
  )
}
