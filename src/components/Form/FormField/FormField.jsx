import "./FormField.css"

export function FormField(props) {
    return(
        <div className="input-field">
            <p>{props.label}</p>
            <input value="" onChange=""></input>
        </div>
        
    )
}