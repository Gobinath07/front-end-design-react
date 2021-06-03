import React,{useState} from 'react'
import { HeroBg } from './HeroElements'
import Video from '../../videos/video.mp4'
import {Button} from '../../components/ButtonElements'
import {VideoBg,HeroContainer,HeroP,HeroBtnWrapper,HeroContent,HeroH1,ArrowForward,ArrowRight} from './HeroElements'

const Hero = () => {

    const [hover,setHover] = useState(false);
    const onHover =()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer> 
              <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            
              </HeroBg>
              <HeroContent>
                  <HeroH1>
                      Virtual Banking Made Easy
                  </HeroH1>
                  <HeroP>
                      Sign up for a new axxount today ans receive $250 in credit toward your next Payment
                  </HeroP>
                  <HeroBtnWrapper>
                      <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                      primary="true"
                      dark="true">  Get Started { hover ? <ArrowForward/> : <ArrowRight/>}
                      </Button>
                    
                  </HeroBtnWrapper>
              </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero