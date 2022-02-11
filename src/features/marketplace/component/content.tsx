import React from 'react';
import Button from './button';
import FilterForm from './filterForm';
import InfoForm from './infoForm';
import Water from '../../../image/waterElu.png';
import Gift from '../../../image/gift.png';
import Tribe from '../../../image/tribe.png';

export default function Content() {
    return (
        <div className='main'>
                <div className='tab'>
                    <div className='buttonForm'>
                        <Button src={Water} title="Elues" />
                        <Button src={Gift} title="Items" />
                        <Button src={Tribe} title="Tribe" />
                    </div>
                    <div className='body'>
                        <FilterForm />
                        <InfoForm />
                    </div>
                </div>
            </div>
    )
}