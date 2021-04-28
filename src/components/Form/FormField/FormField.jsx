import "./FormField.css"

export function FormField(props) {
    return(
        <div className="input-field">
            <p>{props.label}</p>
            <input onChange={(event) => props.handleChange(event,props.id)}></input>
        </div>
    )
}