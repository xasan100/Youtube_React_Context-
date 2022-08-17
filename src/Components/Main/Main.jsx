import React, { useContext } from 'react'
import { MianContext } from '../../Context/Context.jsx'
import    "./MockAbout.js"
import { data } from './MockAbout.js'
import  "./stayle.js"
import { Block } from './stayle.js'
export const Main = () => {

  const [state, setState]=useContext(MianContext);
  return (
    <Block>
          {data.map((value,id)=> value.name.toLowerCase().includes(state.toLowerCase()) && (
              <Block.Inset  key={id}>
               <img src={value.url} alt="" />
                  <h4>{value.name}</h4>
              </Block.Inset>
          ))}
     </Block>
  )
}
