import React from 'react';
import Content from './component/content';
import { Header } from './component/header';
import '../../styles/responsive/mobile.scss'
import '../../styles/responsive/tablet.scss'

export default function Marketplace() {
    
    return (
        <div className="background">
            <Header />
            <Content />
        </div>
    )
}
