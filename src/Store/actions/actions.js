/*this are actions type */

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const SHOW_RESULT = 'SHOW_RESULT';
export const DELETE_ITEM = 'DELETE_ITEM';


export const increment = () => {
  return{
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const add = (val) => {
  return {
    type: ADD,
    value: val
  }
}

export const subtract = (val) => {
  return {
    type: SUBTRACT,
    value: val
  }
}

const saveResult = (res) => {
  return {
    type: SHOW_RESULT,
    result: res
  }
}

export const storeResult = (res) => {
  return dipatch => {
    setTimeout(()=> {
      dipatch(saveResult(res))
    }, 2000)
  }
}

export const deleteItem = (elementID) => {
  return{
    type: DELETE_ITEM,
    id: elementID
  }
}