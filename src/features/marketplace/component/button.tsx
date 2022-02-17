import React from 'react';

export default function Button(props: { src: any; title: any; }) {
    const { src, title } = props;
    return (
        <button className='button' >
            <img src={src} alt=" " className='iconButton'/>
            <h2 className='title' >{title}</h2>
        </button>
    )
}