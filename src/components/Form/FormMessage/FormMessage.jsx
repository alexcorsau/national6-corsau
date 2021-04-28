import "./FormMessage.css"

export function FormMessage(props) {
    return(
        <div className="input-field" >
            <p>{props.label}</p>
            <textarea onChange={(event)=>props.handleChange(event,props.id)}  placeholder="Write your comment here"></textarea>
        </div>
        
    )
}