let defaultState={
    name: [],
    patient: []
}

const mainReducer = (state=defaultState,action)=>{
    // if(action.type==='SHOW_NAME'){
    //     return{
    //         ...state,
    //         name:action.names
    //     }
    // }else{
    //     return{
    //         ...state
    //     }
    // }
    switch (action.type) {
        case 'SHOW_NAME':
            return {
                ...state,
                name:action.names
            }
        case 'SHOW_PATNAME':
            return{
                ...state,
                patient : action.patient
            }
        default:
            return{
                ...state
            };
    }
}

export default mainReducer;