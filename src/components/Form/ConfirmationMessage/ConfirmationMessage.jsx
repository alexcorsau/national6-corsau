import "./ConfirmationMessage.css"

export function ConfirmationMessage(props) {
    return(
        <div className="message">
            <div className="message-text">
                <p>Message sent!</p>
            </div>   
            <div className="message-button">
                <button onClick={props.closeMessage}>x</button>
            </div> 
        </div>
    )
}