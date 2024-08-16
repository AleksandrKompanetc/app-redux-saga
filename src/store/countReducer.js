const defaultState = {
  count: 0
}

const INCREMENT = 'INCREMENT';
const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
const DECREMENT = 'DECREMENT';

export default function countReducer(state = defaultState, action) {
  switch(action.type) {
    case INCREMENT: 
      return {...state, count: state.count + 1}
    case DECREMENT:
      return {...state, count: state.count - 1}
  }
  return state;
}

export const incrementCreator = () => ({type: INCREMENT})
export const AsyncIncrementCreator = () => ({type: ASYNC_INCREMENT})
export const decrementCreator = () => ({type: DECREMENT})