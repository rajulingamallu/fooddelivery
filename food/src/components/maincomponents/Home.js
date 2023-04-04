import React from 'react'
import Header from './Header/Header'
import NonVeg from './Header/Nonveg'
import Softdrinks from './Header/Softdrinks'
import Veg from './Header/Veg'
import Wine from './Header/Wine'

const Home = () => {
  return (
    <>
    <Header/>
    <NonVeg/>
    <Veg/>
    <Softdrinks/>
    <Wine/>
    </>
  )
}

export default Home