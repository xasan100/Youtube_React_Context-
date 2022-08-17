import React, { createContext, useState } from 'react'

export const MianContext = createContext();
export const Context = ({ children }) => {
    const [state,setState]=useState('')
    return (
         <MianContext.Provider value={[state, setState]}>
            {children}
        </MianContext.Provider>
    )
}

export default Context;