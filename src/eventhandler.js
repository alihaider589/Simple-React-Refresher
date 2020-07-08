import React,{useState} from 'react'


const Event =props=>{
const [EnteredText,SetEnteredText] = useState('')

    const submitHandler = event=>{
        event.preventDefault()
       
    const dummyEvent = {
        id:Math.random().toString(),
        text:EnteredText
    }
    SetEnteredText('')
    props.onEvent(dummyEvent ) 
    }

    const ChangedText = (event)=>{

SetEnteredText(event.target.value);
    }
  
    return <form onSubmit={submitHandler}>
        <input type="text" value={EnteredText} onChange={ChangedText}/>
        <button type="submit" >Submit</button>
    </form>
}

export default Event

