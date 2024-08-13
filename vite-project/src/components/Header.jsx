import {useState} from 'react'
import Buttons from './Buttons'

const Header = ({message, fontSize}) => {

  return <h1 style={{ fontSize: `${fontSize}px` }}>{message}</h1>
 
}




export default Header 