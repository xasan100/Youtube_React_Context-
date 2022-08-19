import React, { createContext, useState } from 'react'
import SidebarHidden from './SidebarHidden';

export const MianContext = createContext();

export const Context = ({ children }) => {
    const [state, setState] = useState('')
    return (
        <MianContext.Provider value={[state, setState]}>
            <SidebarHidden>
                {children}
            </SidebarHidden>
        </MianContext.Provider>
    )
}

export default Context;