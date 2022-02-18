import React from 'react'
import './infoForm_footer.scss'
import doubleArow from '../../../../image/double_arow.png'
import arowBack from '../../../../image/arow_back.png'
import doubleArow_next from '../../../../image/double_arow-next.png'
import arowNext from '../../../../image/arow-next.png'
import InfoFormPageNumbers from './infoForm_pageNumbers'


export default function InfoFormFooter() {
  return (
    <div className='infoForm-footer'>
      <div className='infoForm-footer__element'>
        <img src={doubleArow} alt="" />
        <img src={arowBack} alt="" />
      </div>
      <div className='infoForm-footer__element'>
      <InfoFormPageNumbers text='01' />
      <InfoFormPageNumbers text='02'/>
      <InfoFormPageNumbers text='03'/>
      <InfoFormPageNumbers text='...'/>
      <InfoFormPageNumbers text='20'/>
      </div>
      <div className='infoForm-footer__element'>
        <img src={doubleArow_next} alt="" />
        <img src={arowNext} alt="" />
      </div>
    </div>
  )
}
