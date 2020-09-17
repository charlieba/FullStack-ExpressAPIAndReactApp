
const initialState = {
    message: ""
}

const messages = (state=initialState, action)=>{
    switch(action.type){
        case "SEND_MESSAGE":
            return {
                message: action.message
            }
        default:
            return state
    }
}



export default messages