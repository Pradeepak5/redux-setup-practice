import { combineReducers } from "redux";
import inventoryReducer from "./inventoryReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    inventory : inventoryReducer,
    userList : userReducer
})

export default reducers;