import React,{useState} from 'react'

const Todoapp = (props) => {
  const [intext,settext]=useState("")
   const handler=(e)=>{
    settext(e.target.value);


   }

  return (
    <div className='form'>
      <div><input type='text' placeholder='enter your notes' onChange={handler} value={intext}></input></div>
      <div><button onClick={()=>{
        props.additems(intext);
        settext("");
        }}>add</button>
        </div>
    </div>
  )
}

export default Todoapp