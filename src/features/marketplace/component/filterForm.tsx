import React from 'react';

export default function FilterForm() {
   
    return (
        <div className='filterForm'>
            <div className='filter'>
                <p className='title'>Filter (0)</p>
                <p className='title redTxt'>Clear filter</p>
            </div>
            <div className='gen'>
                <p className='title brownTxt'>Gen</p>
                <div>
                    <input type='radio' className='radioButton' value='all'></input>
                    <label>All</label>
                </div>
            </div>
        </div>
    )
}