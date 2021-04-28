

export function SendButton(props){
    return(
        <button className="send-button" onClick={()=>props.handleSend()}>
            Send
        </button>
    )
}