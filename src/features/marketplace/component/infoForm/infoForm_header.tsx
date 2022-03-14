import React, { useState } from 'react'
import optionbtn from '../../../../image/optionBtn_background.png'
import columnImg from '../../../../image/image_infoForm/column-btn.png'
import rowImg from '../../../../image/image_infoForm/row-btn.png'


export default function InfoFormHeader(props:{arrange:any}) {
    
    const [sale, setSale] = useState(false)
    const {arrange}=props
    const [isRowActive, setIsRowActive] = useState(false)

     const changeRowActive = ()=>{
         setIsRowActive(true);
         arrange(isRowActive);
     }
     const changeColumnActive = ()=>{
        setIsRowActive(false);
        arrange(isRowActive);
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

            {
                isRowActive?
                <div className='infoForm-header__right--tasklist'>
                    <div className='tasklist-element' onClick={changeColumnActive}>
                        <img src={columnImg} alt="" />
                    </div>  
                    <div className='tasklist-element  active' onClick={changeRowActive}>  
                    <img src={rowImg} alt="" />
                    </div> 
                </div> :
                <div className='infoForm-header__right--tasklist'>
                    <div className='tasklist-element  active' onClick={changeColumnActive}>
                        <img src={columnImg} alt="" />
                    </div>  
                    <div className='tasklist-element' onClick={changeRowActive}>  
                    <img src={rowImg} alt="" />
                    </div> 
                </div>   
            }
        </div>
    </div>
  )
}
