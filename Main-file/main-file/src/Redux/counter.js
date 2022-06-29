import React from 'react';
import { increment,decrement } from './counterslice'; 
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button' ;

export function Counter() {
    const count = useSelector(state => state.counter.value )
    const dispatch = useDispatch()
  
    return (
      <div className='redux'>
        <div>
          <Button variant='success'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button> 
          <div className='number'>{count}</div>
          <Button variant='danger'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </div>
      </div>
    )
  }