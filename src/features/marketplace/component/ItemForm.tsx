import React from 'react';
import GenItem from './GenItem';
import RarityItem from './RarityItem';

export default function ItemForm(props : {title: any; className: any; titleStyle: any; gen: boolean }) {
    const { title, className, titleStyle, gen } = props;
    return (
        <div className={className}>
            <p className={titleStyle}>{title}</p>
            <div>
                {gen === true ? (<GenItem />) : (<RarityItem />)}
            </div>
        </div>
    )
}