import React, { Component } from 'react'
import "./App"

const List = props =>{
    console.log(props.test)
return <ul>{
    props.test.map((test)=>{
    return <li key={test.id
    }>{test.text}</li>

    })
    
    }</ul>


}


export default List;