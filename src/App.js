import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import ToDoItem from './components/ToDoItem';

function App() {


  const [items,setitems] = useState([]);

  const Additems =(inputText)=> {
         setitems((prev) => {
           return [...prev, inputText];
 
         });
 
       };
       console.log(items)
      
   const deleteitems=(id)=>{

    setitems((prev)=>{
      return items.filter((item,index)=>{
        return index !== id ;
      })
    })

   }


  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-do-list</h1>

        </div>
        <Input Additems={Additems} />
        <div>
          {
            items.map((item,index)=>{
              return ( <div>
               <ToDoItem  Key={index} text={item}  deleteitems={deleteitems} id={index}/>
              </div> )
            })
          }
        </div>
      </div>

    </>
  );
}

export default App;
