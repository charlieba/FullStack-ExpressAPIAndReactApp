const SEND_MESSAGE = "SEND_MESSAGE";


export const sendMessageToAPI = (text)=>{
    return dispatch => {
        fetch("http://localhost:5000/text",{
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                "message":text
            })
        })
        .then(response => response.json())
        .then(json => dispatch({
            type: SEND_MESSAGE,
            message: json.message
        }))
        .catch(err => console.log(err))
    }
}