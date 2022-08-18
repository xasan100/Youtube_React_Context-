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
              <div>   
                <div><img className='img1' src={value.image} alt="" /><span className='spanvalue'>{value.name} </span>
                
                </div>
                <span className='llok'>{value.look}</span>
                </div>
              </Block.Inset>
          ))}
     </Block>
  )
}

