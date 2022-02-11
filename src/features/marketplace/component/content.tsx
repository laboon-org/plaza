import React from 'react';
import Button from './button';
import FilterForm from './filterForm';
import InfoForm from './infoForm';


export default function Content() {
    return (
        <div className='main'>
                <div className='tab'>
                    <div className='buttonForm'>
                        <Button src="../../image/waterElu.png" title="Elues" />
                        <Button src="../../image/gift.png" title="Items" />
                        <Button src="../../image/tribe.png" title="Tribe" />
                    </div>
                    <div className='body'>
                        <FilterForm />
                        <InfoForm />
                    </div>
                </div>
            </div>
    )
}