import React, { useState } from 'react';
import Todoapp from './components/Todoapp';
import Array from './components/Array';
import './App.css';



function App() {
  const [item,setitem]=useState([]);
  const additem=(e)=>{
   setitem((prevstate)=>{
    return[...prevstate,e];
   } )
  }
  const deleteitem=(id)=>{
    setitem((prevstate)=>{
      return prevstate.filter((item,index)=>{
        return index!==id;
      })
    }
)

  }
  return (
    <div className="App">
   <div><h1>
    Todo-list</h1></div> 
      <Todoapp additems={additem}/>
      <div className='list'>
        <ul id='list'>
          {item.map((itemname,index)=>{
            return (<Array key={index}text={itemname} deleteitems={deleteitem} id={index}/>)
          }
          )}
        </ul>
        </div>
      
  </div>
  
  );
}

export default App;
