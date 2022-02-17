import React from 'react'

export default function InfoFormHeader() {
  return (
    <div className='infoForm-header'>
        <div className='infoForm-header__left'>
        <p className='infoForm-header__left--text'>
            15.537 Elues
        </p>
        <div className='infoForm-header__left--button'>
            <p>For sale</p>
            <i className="fa-solid fa-angle-down"></i>
        </div>
        </div>
        <div className='infoForm-header__right'>
        <div className='infoForm-header__left--button'>
            <p>Lowest Price</p>
            <i className="fa-solid fa-angle-down"></i>
        </div>
        <div className='infoForm-header__right--tasklisst'>
            <div className=''></div>
            <div className=''></div>
        </div>
        </div>
    </div>
  )
}
