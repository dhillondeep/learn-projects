import React from 'react'

const UserInput = (props) => {
  return <input type="text" onChange={(e) => {props.changed(e, props.username)}} value={props.fullname}/>
}

export default UserInput;
