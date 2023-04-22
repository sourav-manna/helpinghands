export function Reducer(
    state={
        isLoggedin: localStorage.userId? true: false,
    } ,
    action
){
    switch(action.type){
        case "INPROCESS_TIME":
           {
            state = {...state};
            state.intime = action.payload;
            console.log("Inprocess", state.intime);
            return state;
           }
        case "COMPLETED_TIME":{
            state = {...state};
            state.completedtime = action.payload;
            console.log("Complete", state.completedtime);
            return state;
        }
            
            default:
            return state;
    }
}