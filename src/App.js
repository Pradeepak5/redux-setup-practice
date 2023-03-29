import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createAction } from './Redux/ReduxAction/actionCreator';

function App() {
  const reduxState = useSelector((state)=>state);
  console.log(reduxState);
  const dispatch = useDispatch();
  const {purchaseProduct,restoreProduct}=bindActionCreators(createAction,dispatch);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
