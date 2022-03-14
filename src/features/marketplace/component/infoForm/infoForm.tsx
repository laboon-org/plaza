import React, { useState } from 'react';
import InfoFormContent from './infoForm_content';
import InfoFormFooter from './infoForm_footer';
import InfoFormHeader from './infoForm_header';
import './infoForm.scss'


export default function InfoForm() {
    const [isRow, setIsRow] = useState(false)

    console.log(isRow)
    return (
        <div className='infoForm'>
            <div className='infoForm-frame'>
            <InfoFormHeader arrange={(value:any) => setIsRow(value)} />
            <InfoFormContent isRow={isRow}/>
            <InfoFormFooter />
            </div>
        </div>
    )
}