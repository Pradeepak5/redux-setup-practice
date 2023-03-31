import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAction } from './Redux/ReduxAction/actionCreator';
import { useState } from 'react';

function App() {
  const reduxState = useSelector((state)=>state);
  console.log(reduxState);
  const [count,setCount] = useState(0);
  const [restore,setRestore] = useState(0);
  const dispatch = useDispatch();
  const {purchaseProduct,restoreProduct}=bindActionCreators(createAction,dispatch);
  console.log(reduxState.inventory);
  return (
    <div className="App">
      <div className='order-component'>
        <div className='product-info'>
          <h3>Addidas shoe</h3>
          <img src='#' />
        </div>
        <div className='product-action'>
          <button onClick={()=>setCount(count+1)}>+</button>
          <p>{count}</p>
          <button onClick={()=>setCount(count-1)}>-</button>
          <button onClick={()=>purchaseProduct(count)}>Buy</button>
        </div>
      </div>
      <div>Left Items {reduxState.inventory}</div>
    </div>
  );
}

export default App;
