import React from 'react';
import DetailItem from './DetailItem';
export default function GenItem() {
    return (
            <div className='horizontal' >
                <DetailItem type='radio' label='All' labelStyle='label' url='null' className='null' tier={false} />
                <DetailItem type='radio' label='Gen 1' labelStyle='label' url='null' className='null' tier={false}/>
                <DetailItem type='radio' label='Gen 2' labelStyle='label' url='null' className='null' tier={false}/>
                <DetailItem type='radio' label='Gen 3' labelStyle='label' url='null' className='null' tier={false}/>
            </div>
    )
}