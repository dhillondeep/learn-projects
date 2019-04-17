import React from 'react';

const UserOutput = props => {
  return (
    <div>
      <p>Full Name: {props.fullname}</p>
      <p>Username: {props.username}</p>
    </div>
  );
};

export default UserOutput;