import React from 'react';

export default function DetailItem(props: {type: any; label: any; className: any; labelStyle: any; tier: boolean, url: any;}) {
    const {type, label, className, labelStyle, tier, url } = props;
    return (
        <div className='item'>
            <input type={type} className='radioButton' />
            <div className={className}>
                {tier === true ? <img src={url} alt='' className='image' /> : null}
                <p className={labelStyle}>{label}</p>
            </div>
        </div>
        )
    }  