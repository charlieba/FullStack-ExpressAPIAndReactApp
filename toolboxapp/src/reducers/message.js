const initialState = {
    message: []
}

const todos = (state=initialState, action)=>{
    switch(action.type){
        case "SEND_MESSAGE":
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}

export default todos