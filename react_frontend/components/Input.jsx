import React from 'react'

const Input = (props) => {
  return (
    <>
    <div className={props.class}>
    <label htmlFor={props.for} className="form-label">{props.text}</label>
   <input type={props.type} className={"form-control"} value = {props.value} onChange={props.onChange} />
  </div>
    </>
  )
}

export default Input