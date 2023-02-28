import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch();
  const increment=()=>{
    dispatch(actions.increment())
  }
  const decrement=()=>{
    dispatch(actions.decrement())
  }
  const addBy=()=>{
    dispatch(actions.addBy(10))
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
