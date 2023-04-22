import React from 'react'

const Array = (props) => {
  return (
    <div className='container'>
      <li>{props.text} <button  onClick={()=>props.deleteitems(props.id)}>delete </button></li>
      
      
      </div>
  )
}

export default Array