import React, { createContext, useState } from 'react';

export const SideBarHiddenContext = createContext();

const SidebarHidden = ({ children}) => {

    const [state, setState] = useState(true);

    return(
        <SideBarHiddenContext.Provider value={[state, setState]}>
            {children}
        </SideBarHiddenContext.Provider>
    )
}


export default SidebarHidden;