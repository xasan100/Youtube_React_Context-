import React, { useContext, useEffect, useState } from 'react'
import "./stayle.js"
import YotubeLogonav from "../../Assest/yotubeLogo.svg"
import hamburgerBtn from "../../Assest/hamburger.png"
import cameraEnd from "../../Assest/camera.png"
import camercenter from "../../Assest/endlogo.svg"
import endMutue from "../../Assest/mute.png"
import EndImgLogo from "../../Assest/pp.png"
import { AiOutlineSearch } from "react-icons/ai";
import { Block, Endicon1, Endicon2, Endicon3, EndImg, Hamburger, Inputsearch, Logonav, NavbarCenter, Navbarend, Navbarlogo } from './stayle.js'
import { MianContext } from '../../Context/Context.jsx'

export const About = () => {

    const [state, setState] = useContext(MianContext)
        

    return (
        <Block>
            <Navbarlogo>
                <Hamburger  src={hamburgerBtn} />
                <Logonav src={YotubeLogonav} />
            </Navbarlogo>

            <NavbarCenter>
                <input onChange={(e) => setState(e.target.value)} placeholder='All' type="text" false />
                <Inputsearch > <span><AiOutlineSearch /></span> </Inputsearch>
            </NavbarCenter>

            <Navbarend>
                <div className='endIcon'>
                    <Endicon1 src={cameraEnd} />
                    <Endicon2 src={camercenter} />
                    <Endicon3 src={endMutue} />
                </div>
                <div>  <EndImg src={EndImgLogo} /> </div>
            </Navbarend>
        </Block>
    )
}
