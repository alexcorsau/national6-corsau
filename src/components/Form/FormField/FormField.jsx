import "./FormField.css"

export function FormField(props) {
    let inputClass = "";
    if(props.invalid===false) {
        inputClass += " invalid-field" 
    }
    return(
        <div className="input-field">
            <p>{props.label}</p>
            <input onChange={(event) => props.handleChange(event,props.id)} className={inputClass}></input>
        </div>
    )
}