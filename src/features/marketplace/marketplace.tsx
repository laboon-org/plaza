import React from 'react';
import Content from './component/content';
import { Header } from './component/header';
import '../../styles/responsive/mobile.scss'

export default function Marketplace() {
    
    return (
        <div className="background">
            <Header />
            <Content />
        </div>
    )
}
