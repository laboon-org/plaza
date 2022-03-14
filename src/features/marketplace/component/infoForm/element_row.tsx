import React from 'react'
import a from '../../../../image/a.png'
import purchase_btn from '../../../../image/image_infoForm/purchase_btn.png'
import backgroundBtn from '../../../../image/image_infoForm/button-orange.png'
import InfoFormBtn from './infoForm_button'
import InformationItem from './information_item'

export default function ElementRow(
  props:{
  iconItem1:any, iconItem2:any,iconItem3:any,iconItem4:any,iconItem5:any,iconItem6:any,
  parameter1:any,parameter2:any,parameter3:any,parameter4:any,parameter5:any,parameter6:any,
  level:any,image_level:any,
  idAcitve:any
}) {
  const {
    iconItem1, iconItem2,iconItem3,iconItem4,iconItem5,iconItem6,
    parameter1,parameter2,parameter3,parameter4,parameter5,parameter6,
    image_level,level,
    idAcitve
  }=props
  return (
    <div className='element-row'>
      <div className='element-row__content'>
        <div className='light'></div>
        <div className='element-row__left'>
          <img className='information-row__left--image' src={a} alt="" />
          <div className='information-row'>
            <div className='information-row__idlevel'>
              <div className='information-row__left--id'>
                <InfoFormBtn
                idActive={idAcitve} 
                backgroundBtn={backgroundBtn} textBtn='#123456' />
              </div>
              <div className='information-left__level'>
                <p className='information-left__level--title'>{level}</p>
                <img className='information-left__level--img' src={image_level} alt="" />
              </div>
            </div>
            <div className='information-row__right'>
              <InformationItem iconItem={iconItem1} parameter={parameter1}/>
              <InformationItem iconItem={iconItem2} parameter={parameter2}/>
              <InformationItem iconItem={iconItem3} parameter={parameter3}/>
              <InformationItem iconItem={iconItem4} parameter={parameter4}/>
              <InformationItem iconItem={iconItem5} parameter={parameter5}/>
              <InformationItem iconItem={iconItem6} parameter={parameter6}/>
            </div>
          </div>
        </div>
        <div className='element-row__right'>
          <div className='price-row'>
            <p className='price-boon'>
              0.009
            </p>
            <img className='price-img' src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/boon-coin1.webp' alt="" />
            <p className='price-usd'>$34</p>
          </div>
          <div className='infoForm-row__element--button'>
            <img src={purchase_btn} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
