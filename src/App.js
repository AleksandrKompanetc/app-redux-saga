import React from 'react';
import style from './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCreator, incrementCreator } from './store/countReducer';

const App = () => {
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch()
  return (
    <div className="app">
      <div className='count'></div>
      <div className='btns'>
        <button className='btn' onClick={() => dispatch(incrementCreator())}>Increment++</button>
        <button className='btn' onClick={() => dispatch(decrementCreator())}>Decrement--</button>
        <button className='btn'>Get Users</button>
      </div>
      <div className='users'>
        {users.map(user => 
          <div className='user'>
            {user.name}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
