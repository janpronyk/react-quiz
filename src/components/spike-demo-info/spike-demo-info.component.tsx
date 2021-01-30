import React from 'react'


import { SpikeDemoInfoWrapper } from './spike-demo-info.styles'

import Logo from '../../assets/logo.png'


const SpikeDemoInfo = () => (
    <SpikeDemoInfoWrapper className="demo-info">
        <a href="https://spikedev.eu">
            <img src={Logo} alt="Logo" />
        </a>
        
        <div className="demo-text-container">
            <h4>DEMO APP</h4>
            <div>
                <a href="https://spikedev.eu/privacy/">Privacy</a>
                <a href="https://spikedev.eu/terms-of-service/">Terms</a>
            </div>
        </div>
    </SpikeDemoInfoWrapper>
)


export default SpikeDemoInfo