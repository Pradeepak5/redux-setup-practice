const userReducer  = (state=10,action)=>{
    switch(action.type){
        case "add_user":
            return state + action.payload;
        default:
            return state;
    }
}
export default userReducer;