import React, { useContext, useCallback, useEffect } from 'react'
import { AppContext } from '../App';
import Key from './Key';

function Kyeboard() {
    const {onDelete, onEnter, onSelect , disabledLetters}= useContext(AppContext)
    const keyLine1 =["Q", "W", "E","R","T","Y","U","I","O","P"];
    const keyLine2 =["A","S","D","F","G","H","J","K","L"];
    const keyLine3 =["Z","X","C","V","B","N","M"];

    const handleKyeboard = useCallback((event) =>{
      if (event.key === "Enter"){
      onEnter()
      }
      else if (event.key === "Backspace"){
      onDelete()
      }
      else{
    keyLine1.forEach((key) =>{
      if (event.key.toLowerCase() === key.toLowerCase()){
       onSelect(key)
      }
      })
    keyLine2.forEach((key) =>{
      if (event.key.toLowerCase() === key.toLowerCase()){
      onSelect(key)
      }
      })
    keyLine3.forEach((key) =>{
  if (event.key.toLowerCase() === key.toLowerCase()){
    onSelect(key)
      }
      })
      }
      } )

    useEffect(() => {
      document.addEventListener("keydown", handleKyeboard)

      return() =>{
      document.removeEventListener("keydown", handleKyeboard)
      }
      }, [handleKyeboard]) 

  return (
    <><div className='keyboard' onKeyDown={handleKyeboard}>
    <div className='keyLine1'>
      {keyLine1.map((key)=>{
        return<Key keyValue={key} disabled={disabledLetters.includes(key)}/>
    })}</div>
    <div className='keyLine2'>
      {keyLine2.map((key)=>{
        return<Key keyValue={key}  disabled={disabledLetters.includes(key)}/>
    })}</div>
    <div className='keyLine3'>
      <Key keyValue={"Enter"} bigKey/>
      {keyLine3.map((key)=>{
        return<Key keyValue={key}  disabled={disabledLetters.includes(key)}/>
        
    })}
    <Key keyValue={"Delete"}bigKey/>
    </div>
    </div>
    </>
  )
}

export default Kyeboard