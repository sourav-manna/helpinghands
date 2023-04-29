export function Reducer(
    state={
        isLoggedin: localStorage.userId? true: false,
        toggle:1,
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

        case "TOGGLE_BUTTON":{
            state = {...state};
            state.toggle = action.payload;
            console.log("Toggle", state.toggle);
            return state;
        }
            
            default:
            return state;
    }
}