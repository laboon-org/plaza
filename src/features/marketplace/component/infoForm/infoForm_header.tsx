import React from 'react'
import optionbtn from '../../../../image/optionBtn_background.png'

export default function InfoFormHeader() {
  return (
    <div className='infoForm-header'>
        <div className='infoForm-header__left'>
        <p className='infoForm-header__left--text'>
            15.537 Elues
        </p>
        <div className='infoForm-header__left--button'>
            <img className='infoForm-header__left__button--img' src={optionbtn} alt="" />
            <div className='infoForm-header__left__button--text'>
            <p>For sale</p>
            <i className="fa-solid fa-angle-down"></i>
            </div>
        </div>
        </div>
        <div className='infoForm-header__right'>
        <div className='infoForm-header__left--button'>
        <img className='infoForm-header__left__button--img' src={optionbtn} alt="" />
            <div className='infoForm-header__left__button--text'>
            <p>Lowest Price</p>
            <i className="fa-solid fa-angle-down"></i>
            </div>
        </div>
        <div className='infoForm-header__right--tasklist'>
            <div className='tasklist-column'>

            </div>
            <div className='tasklist-row'>
                
            </div>
        </div>
        </div>
    </div>
  )
}
