import React from 'react'

import Icon1 from '../../images/first.svg';

import Icon2 from '../../images/svg2.svg';

import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer,ServicesH1,ServicesH2,ServicesCard,ServicesIcon,ServicesP,ServicesWrapper} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">

            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
            <ServicesCard>

                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa culpa, eos explicabo porro atque at, incidunt eum provident, placeat iure debitis. Ad id, temporibus excepturi magni natus nihil aut.

                </ServicesP>

            </ServicesCard>
            <ServicesCard>

<ServicesIcon src={Icon2}/>       <ServicesH2>Reduce expenses</ServicesH2>
<ServicesP>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa culpa, eos explicabo porro atque at, incidunt eum provident, placeat iure debitis. Ad id, temporibus excepturi magni natus nihil aut.
    
</ServicesP>

</ServicesCard>
<ServicesCard>

<ServicesIcon src={Icon3}/><ServicesH2>Reduce expenses</ServicesH2>
<ServicesP>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa culpa, eos explicabo porro atque at, incidunt eum provident, placeat iure debitis. Ad id, temporibus excepturi magni natus nihil aut.
    
</ServicesP>

</ServicesCard></ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
