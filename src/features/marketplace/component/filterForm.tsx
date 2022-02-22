import React from 'react';
import ItemForm from './ItemForm';
import Tier from './Tier';

export default function FilterForm() {
    return (
        <div className='filterForm'>
            <div className='filter'>
                <p className='title'>Filter (0)</p>
                <p className='title redTxt'>Clear filter</p>
            </div>
            <div className='item-form'>
            <ItemForm gen={true} title='Gen' className='gen' titleStyle='brownTxt' />
            <ItemForm gen={false}  title='Rarity' className='gen' titleStyle='title brownTxt' />
            <Tier />
            </div>
        </div>
    )
}