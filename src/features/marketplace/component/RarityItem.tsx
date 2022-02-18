import React from 'react';
import DetailItem from './DetailItem';

export default function RarityItem() {
    return (
        <>
            <div className='horizontal'>
                <DetailItem type='Radio' label='Normal' className='normalForm' labelStyle='label normalTxt' url='null' tier={false} />
                <DetailItem type='radio' label='Epic' className='normalForm epicBg' labelStyle='label epicTxt' url='null' tier={false}/>
                <DetailItem type='radio' label='Rare' className='normalForm rareBg' labelStyle='label rareTxt' url='null' tier={false}/>
                <DetailItem type='radio' label='Legendary' className='normalForm legendBg' labelStyle='label legendTxt' url='null' tier={false}/>
                <DetailItem type='radio' label='Mythical' className='normalForm mythicalBg' labelStyle='label mythicalTxt' url='null' tier={false}/>
            </div>
        </>        
            
    )
}