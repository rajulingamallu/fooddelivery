import React from 'react'

const explore_card={
   margin:'12px 0px 24px 0px',
   borderRadius:'1px solid transparent'

}
const explore_card_cover={
  height:'240px',
  width:'320px',
  borderRadius:'15px',
  position:'relative',
  cursor:'pointer'
}
const explore_card_image={
  height:'100%',
  width:'100%',
  objectFit:'cover',
  borderRadius:'15px'
}
const deliverytime={
  position:'absolute',
  right:'10px',
  bottom:'10px',
  opacity:'0.8',
  backdropFliter:'blur(4px)',
  fontWeight:'600px',
  backgroundColor:'white',
  fontSize:'12px',
  padding:'2px 5px 3px',
  borderRadius:'4px'
   
}
const prooff={
  position:'absolute',
  left:'0px',
  bottom:'40px',
  color:'white',
  fontSize:'14px',
  padding:'0px 6px',
  borderRadius:'0px 2px 2px 0px',
  overFlow:'hidden',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap',
  lineHeight:'18px',
  fontWeight:'500',
  backgroundColor:'red'
}
const disCount={
  position:'absolute',
  left:'0px',
  bottom:'14px',
  color:'white',
  fontSize:'14px',
  padding:'0px 6px',
  borderRadius:'0px 2px 2px 0px',
  overFlow:'hidden',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap',
  lineHeight:'18px',
  fontWeight:'500',
  backgroundColor:'blue'
}
const goldoff={
  position:'absolute',
  left:'0px',
  bottom:'14px',
  color:'white',
  fontSize:'14px',
  padding:'0px 6px',
  borderRadius:'0px 2px 2px 0px',
  overFlow:'hidden',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap',
  lineHeight:'18px',
  fontWeight:'500',
  backgroundColor:'red'
}
const res_row={
  display:'flex',
  justifyContent:'space-between',
  padding:'8px 0px 6px'

}
const res_name={
  maxWidth:'200px',
  overFlow:'hidden',
  textOverflow:'ellipsis',
  fontSize:'18px',
  fontWeight:'600',
  color:'black'
   
}
const res_rating={
  padding:'0px 8px',
  fontSize:'13px',
  fontWeight:'600',
  color:'white',
  backgroundColor:'green',
  borderRadius:'6px',
  height:'24px'

}
const ExploreCard = ({restaurant}) => {
    const coverImage = restaurant?.info?.image?.url;
    const name = restaurant?.info?.name??"";
    // const deliveryTime = restaurant?.order?.deliveryTime;
    // const rating =restaurant?.info?.cfo?.text;
    // const offers =restaurant?.bulkoffer ?? [];
    // const cuisines = restaurant?.info?.cuisine?.
    // offers.map((item)=>item.name).slice(0,3)

    // const bottomContainers= restaurant?.bottomContainers;
    // const goldOff = restaurant?.gold?.text;
    // const proOff = offers.length>1?offers[0].text:null;
    // const discount =
    // offers.length>1
    // ? offers[1].text
    // :offers.length===1
    // ?offers[0].text
    // :null;
  return (
    <div className='cur-po' style={explore_card}>
      <div style={explore_card_cover}>
        <img src={coverImage} alt={name} style={explore_card_image}/>
      </div>
      </div>
    //   <div style={deliverytime}>{deliveryTime}</div>
    //   {proOff && <div style={prooff} >{proOff}</div>}
    //   {goldOff && <div  style={goldoff}>{goldOff}</div>}
    //   <div style={disCount}>{discount}</div>
    // ,
    // <div className='res-row' style={res_row}>
    // <div style={res_name} >{name}</div>
    // <div style={res_rating}>{rating}</div>
    // </div>
  )
}

export default ExploreCard