import React,{useState} from 'react'

const Person_comp = (props) => {
    const [vData , setData]=useState(false);

  return (
    <>
    <div className='item'>
    <span className='change-pro'>{props.myData.name}</span>
    <span className='change-pro'><h4>height</h4>{props.myData.height}</span>
    <span className='change-pro'><h4>Mass</h4>{props.myData.mass}</span>
    <span className='change-pro'><h4>Hair color</h4>{props.myData.hair_color}</span>
    <span className='gender'><button onClick={()=>setData(!vData)}>{vData?"Hide details":"View details"}</button></span>
    </div>
    { vData &&    <div className='details'>
    <div className='top'>
          <span className='description'>Description</span>
          </div>
          <div className='bottom-part'>
            <div className='left'>
          <span className='designation'><h4>Birth Year</h4>{props.myData.birth_year}</span>
          <span className='email'><h4>Skin Color</h4>{props.myData.skin_color}</span>
          <span className='phone'><h4>Gender</h4>{props.myData.gender}</span>
          </div>
          <div className='right'>
          <span className='address'><h4>Address</h4></span>
          <span className='city'><h4>City</h4></span>
          <span className='state'><h4>State</h4></span>
          <span className='country'><h4>Country</h4></span>
          </div>
          </div>
         </div>}
    </>
  )
}

export default Person_comp;
