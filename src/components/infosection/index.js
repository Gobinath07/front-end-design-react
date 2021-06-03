import React from 'react'
import {Button} from '../ButtonElements'

import {InfoContainer,Inforow,InfoWrapper,Column1,Column2,Heading,TopLine,Subtitle,BtnWrap,TextWrapper,Img,ImgWrap} from './infoSections'
const Info = ({primary,dark,dark2,lightText,lightBg,topLine,img,imgStart,darkText,buttonLabel,id,headline,description,alt}) => {
return (
<div>
<InfoContainer lightBg={lightBg} id={id}>
<InfoWrapper>
<Inforow imgStart={imgStart}>
<Column1>
<TextWrapper>
<TopLine>{topLine}</TopLine>
<Heading lightText={lightText}>
{headline}
</Heading>
<Subtitle darkText={darkText}>
{description}
</Subtitle>
<BtnWrap>
<Button to='home'
smooth={true}
duration={500}
exact="true"
offset={-80}
spy={true}
primary={primary ?1 : 0 }
dark={dark ?1 : 0 }
dark2={dark2 ? 1 : 0}
>{buttonLabel}</Button>
</BtnWrap>
</TextWrapper></Column1>
<Column2>
<ImgWrap>
<Img src={img} alt={alt}/>
</ImgWrap></Column2>
</Inforow>
</InfoWrapper>
</InfoContainer>
</div>
)
}

export default Info

