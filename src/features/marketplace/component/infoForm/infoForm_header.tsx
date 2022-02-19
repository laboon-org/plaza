import React, { useState } from 'react'
import optionbtn from '../../../../image/optionBtn_background.png'

export default function InfoFormHeader() {
    const [sale, setSale] = useState(false)
  return (
    <div className='infoForm-header'>
        <div className='infoForm-header__left'>
        <p className='infoForm-header__left--text'>
            15.537 Elues
        </p>
        <div className='infoForm-header__left--button' >
        <select id="selected" className='infoForm-header__left--button' >
            <option className='background-option' selected value="For sale">For sale</option>
            <option className='background-option' value="Specials">Specials</option>
            <option className='background-option' value="All">All</option>
        </select>
        </div>
        </div>
        <div className='infoForm-header__right'>
        <div className='infoForm-header__right--button'>
        <select id="selected" className='infoForm-header__right--button' >
            <option className='background-option' selected value="For sale">Lowest Price</option>
            <option className='background-option' value="Specials">Newest</option>
            <option className='background-option' value="All">Latest</option>
            <option className='background-option' value="All">Lowest Price</option>
            <option className='background-option' value="All">Highest Price</option>
        </select>
        {/* <img className='infoForm-header__left__button--img' src={optionbtn} alt="" />
            <div className='infoForm-header__left__button--text'>
            <p>Lowest Price</p>
            <i className="fa-solid fa-angle-down"></i>
            </div> */}
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
