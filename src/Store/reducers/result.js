import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const resultReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.SHOW_RESULT: {
      return updateObject(state, {results:state.results.concat({
          id: new Date() * Math.random(),
          value: action.result
        })})
    }
    case actionTypes.DELETE_ITEM: {
      const newArray = state.results.filter(res => res.id !== action.id);
      return updateObject(state, {results: newArray})
    }
    default: {
      return state;
    }
  }
}

export default resultReducer;