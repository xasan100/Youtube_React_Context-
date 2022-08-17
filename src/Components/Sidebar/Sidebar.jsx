import React from 'react'
import "./stayle.js"
import "./data.js"
import { BoxNav, Container } from './stayle.js'
import { data } from './data.js'

export const Sidebar = () => {
  return (
      <Container>{data.map((value)=>(
          <BoxNav>
              <h4> <img src={value.image} />&nbsp; &nbsp;&nbsp;{value.tiitle}</h4>
          </BoxNav>   
        
      ))}</Container>
  )
}
