const SEND_MESSAGE = "SEND_MESSAGE";



const sendMessage = (message) =>({
    type: SEND_MESSAGE,
    message
})

export const saveTodo = (text)=>{
    return dispatch => {
        fetch("http://localhost:5000/text",{
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                text
            })
        })
        .then(response => dispatch(sendMessage(response)))
        .catch(err => console.log(err))
    }
}