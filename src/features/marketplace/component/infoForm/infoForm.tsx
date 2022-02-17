import React from 'react';
import InfoFormContent from './infoForm_content';
import InfoFormFooter from './infoForm_footer';
import InfoFormHeader from './infoForm_header';
import './infoForm.scss'


export default function InfoForm() {
    return (
        <div className='infoForm'>
            <div className='infoForm-frame'>
            <InfoFormHeader />
            <InfoFormContent />
            <InfoFormFooter />
            </div>
        </div>
    )
}