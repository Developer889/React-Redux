import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch({type:'INC'})
  }
  const decrement=()=>{
    dispatch({type:'DEC'})
  }
  const addBy=()=>{
    dispatch({type:'ADD',payload:10})
  }
  return (
    <div className="App">
     <h1>Counter App</h1>
     <h1>{counter}</h1>
     <button onClick={increment} >Increment</button>
     <button onClick={decrement} >Decrement</button>
     <button onClick={addBy} >Add Value</button>
    </div>
  );
}

export default App;
