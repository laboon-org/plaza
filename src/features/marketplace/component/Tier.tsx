import React from 'react';
import DetailItem from './DetailItem';
import earth from '../../../image/earth.png';
import neutral from '../../../image/neutral.png';
import electric from '../../../image/electric.png';
import light from '../../../image/light.png';
import fire from '../../../image/fire.png';
import water from '../../../image/water.png';
import dark from '../../../image/dark.png';
import mountain from '../../../image/mountain.png';
import wood from '../../../image/wood.png';
import thunder from '../../../image/thunder.png';
import air from '../../../image/air.png';
import comet from '../../../image/comet.png';
import plasma from '../../../image/plasma.png';
import magma from '../../../image/magma.png';
import drawn from '../../../image/drawn.png';
import storm from '../../../image/storm.png';
import gamma from '../../../image/gamma.png';
import plant from '../../../image/plant.png';
import solar from '../../../image/solar.png';
import doom from '../../../image/doom.png';
import meteor from '../../../image/meteor.png';
import inferno from '../../../image/inferno.png';
import ice from '../../../image/ice.png';

export default function Tier() {
    return (
        <div className='tierForm'>
            <div className='titleForm'>
                <div className='tierButton'>Body Parts</div>
                <div className='tierButton'>Elemental</div>
            </div>
            <div className='tierForm-content'>
            <div className='gen-frame'>
                <p className='brownTxt'>Tier 1</p>
                <div className='horizontal'>
                    <DetailItem tier type='checkbox' label='Earth' url={earth} className='detail' labelStyle='label' />
                    <DetailItem tier type='checkbox' label='Neutral' url={neutral} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Electric' url={electric} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Light' url={light} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Fire' url={fire} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Water' url={water} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Dark' url={dark} className='detail' labelStyle='label'/>
                </div>
            </div>
            <div className='gen-frame' >
                <p  className='brownTxt'>Tier 2</p>
                <div className='horizontal'>
                    <DetailItem tier type='checkbox' label='Mountain' url={mountain} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Comet' url={comet} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Inferno' url={inferno} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Wood' url={wood} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Plasma' url={plasma} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Ice' url={ice} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Thunder' url={thunder} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Magma' url={magma} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Dawn' url={drawn} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Air' url={air} className='detail' labelStyle='label'/>
                </div>
            </div>
            <div className='gen-frame' >
                <p  className='brownTxt'>Tier 3</p>
                <div className='horizontal'>
                <DetailItem tier type='checkbox' label='Storm' url={storm} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Gamma' url={gamma} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Plant' url={plant} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Solar' url={solar} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Meteor' url={meteor} className='detail' labelStyle='label'/>
                    <DetailItem tier type='checkbox' label='Doom' url={doom} className='detail' labelStyle='label'/>
                </div>
            </div>
            </div>
        </div>
    )
}