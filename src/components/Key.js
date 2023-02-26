import React, {useContext} from 'react'
import { AppContext } from '../App';

function Key({keyValue, bigKey, disabled}) {
    const { onDelete, onEnter,onSelect}= useContext(AppContext);
    const selectLetter= () => {
        if(keyValue === "Enter"){
        onEnter()
        }
        else if(keyValue=== "Delete") {
        onDelete()
        }
        else{
        onSelect(keyValue)
    }}
  return (
    <div className='key' id={bigKey ? "big": disabled && "disabled"} onClick={selectLetter}>
        {keyValue}</div>
  )
}

export default Key