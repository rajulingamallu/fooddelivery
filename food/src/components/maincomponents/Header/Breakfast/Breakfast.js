import React from 'react'
//import BreakfastLast from './BreakfastLast';
// import BreakfastLatest from './BreakfastLatest';
import { restaurants } from './Breakfastapi'
// import BreakfastLatest from './BreakfastLatest';
//import Breakfastnew from './Breakfastnew';
 import Explore from './Explore'

const apiurl=restaurants
const Breakfast = () => {
  return (<>
    <div style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:'30px'}}>Breakfast Menu</div>
   <Explore list={apiurl}/>
 
  {/* <BreakfastLatest/> */}
    </>)
}

export default Breakfast

