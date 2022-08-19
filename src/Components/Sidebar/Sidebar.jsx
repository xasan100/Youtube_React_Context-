import React, { useContext, useState } from 'react'
import "./stayle.js"
import "./data.js"
import { BoxNav, Container } from './stayle.js'
import { data } from './data.js'
import { SideBarHiddenContext } from '../../Context/SidebarHidden.jsx'

export const Sidebar = () => {

    const [state, setState] = useContext(SideBarHiddenContext);
    const [open, setOpen] = useState(true)
    let nine = 9;
    const getId = (value) => {

        value.id == nine ? setOpen(!open) : setOpen(true);
        console.log(open);
    }
    return (
        <Container hidden={state}>
            {data.map((value) => (
                <BoxNav>
                    <h4 onClick={() => getId(value)}>
                        <img src={value.image} />
                        &nbsp; &nbsp;&nbsp;
                        {value.tiitle}
                    </h4>
                    {open ? value.child?.map((item) => (
                        <div>
                            <h4> {item.tiitle} </h4>

                        </div>
                    )) : ""}
                    <div>

                    </div>
                </BoxNav>
            ))}
        </Container>
    )
}
