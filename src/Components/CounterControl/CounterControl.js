import React from 'react';

const counterControl = (props) => {
  const style = {
    border: '1px solid #eee',
    margin: '2%',
    fontSize: '20px',
    width: '15%',
    cursor: 'pointer'
  }
  return (
    <button style={style} onClick={props.onClick}>{props.children}</button>
  );
}

export default counterControl;