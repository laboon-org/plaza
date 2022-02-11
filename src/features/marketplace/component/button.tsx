import React from 'react';
import { useForm } from 'react-hook-form';

// interface ButtonProps {
//     src ?: string;
//     title ?: string;
//     onClick ?: () => void;
// }

// Button.defaultProps = {};
export default function Button(props: { src: any; title: any; onClick: any; }) {
    const { src, title, onClick } = props;
    return (
        <button className='button' onClick={onClick}>
            <img src={src} alt=" " className='iconButton'/>
            <h2 className='title' >{title}</h2>
        </button>
    )
}