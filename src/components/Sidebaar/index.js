import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarLink,sidebarWrapper,SidebarRoute,SidebarMenu} from './SideElements'

const Sidebar=({isOpen,toggle}) =>{
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
           <CloseIcon/>
           </Icon> 
           <sidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="about">
                       About
                   </SidebarLink>
                   <SidebarLink to="discover">
                       Discover
                   </SidebarLink>
                   <SidebarLink to="services">
                       Services
                   </SidebarLink>
                   <SidebarLink to="sign up">
                       sign up
                   </SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to="/sign in">
                       Sign In
                   </SidebarRoute>
               </SideBtnWrap>
           </sidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
