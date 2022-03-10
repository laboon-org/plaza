import React, { useState } from 'react'
import optionbtn from '../../../../image/optionBtn_background.png'
import columnImg from '../../../../image/image_infoForm/column-btn.png'
import rowImg from '../../../../image/image_infoForm/row-btn.png'

export default function InfoFormHeader() {
    const [sale, setSale] = useState(false)
    const [isColumnActive, setIsColumnActive] = useState('tasklist-element')
    const [isRowActive, setIsRowActive] = useState('tasklist-element')

    const changeColumnActive = ()=>{
        setIsRowActive('tasklist-element')
        setIsColumnActive('tasklist-element active')
    }
    const changeRowActive = ()=>{
        setIsColumnActive('tasklist-element')
        setIsRowActive('tasklist-element active')
    }
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
        </div>
        <div className='infoForm-header__right--tasklist'>
            <div className={isColumnActive} onClick={changeColumnActive}>
                <img src={columnImg} alt="" />
            </div>
            <div className={isRowActive} onClick={changeRowActive}>  
            <img src={rowImg} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}
