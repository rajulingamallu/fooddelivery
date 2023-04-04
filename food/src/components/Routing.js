import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Breakfast from './maincomponents/Header/Breakfast/Breakfast';
import NonVeg from '../components/maincomponents/Header/Nonveg';
import SoftDrinks from '../components/maincomponents/Header/Softdrinks';
import Veg from '../components/maincomponents/Header/Veg';
import Home from './maincomponents/Home';
import Wine from './maincomponents/Header/Wine';
import Main from './maincomponents/Main';
// import All_items from './maincomponents/Header/All_items';

export default function Routings() {
  return (
    <>
      <BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/breakfast' element={<Breakfast/>}/>
    <Route path='/veg' element={<Veg/>}/>
    <Route path='/nonveg' element={<NonVeg/>}/>
    <Route path='/softdrinks' element={<SoftDrinks/>}/>
    <Route path='/wine' element={<Wine/>}/>
    <Route path='/main' element={<Main/>}/>

   
</Routes>

 </BrowserRouter>
    </>
  )
}