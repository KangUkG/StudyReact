import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';


const Counter = () => {
  const count = useSelector(state => state.counter);
  const toggleCount = useSelector(state => state.toggleCount)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type: 'toggleCount'})
  };

  const increment5Handler = () => {
    dispatch({type: 'increment', amount: 5 })
  }

  const incrementHandler = () => {
    dispatch({type: 'increment', amount: 1 })
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCount && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increment5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
