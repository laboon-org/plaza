import React from 'react';
import { useForm } from 'react-hook-form';

interface ButtonProps {
    src ?: string;
    title : string;
    onClick ?: () => void;
}

Button.defaultProps = {};
export default function Button(props?: ButtonProps) {

    return (
        <button className='button' >
            <img src={`src`} alt=" " className='iconButton'/>
            <h2 >{`title`}</h2>
        </button>
    )
}