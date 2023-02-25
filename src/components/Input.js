import React,{useState} from 'react'

function Input(props) {

    const[inputText,setinputText] = useState("")

    const HandleChange =(e)=> {

    return setinputText(e.target.value);

    }

  return (
    <div className='form'>
        <input type="text" onChange={HandleChange} value={inputText}/>

        <button onClick={()=>{            
          inputText.trim() && props.Additems(inputText) ;
            
          setinputText("");
           
        }}> 
        
        <span>Add</span>
        
        </button>
        
    </div>
  )
}

export default Input;