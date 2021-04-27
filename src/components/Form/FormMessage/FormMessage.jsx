import "./FormMessage.css"

export function FormMessage(props) {
    return(
        <div 
        className="input-field"
        onChange={this.handleChange}
        >
            <p>{props.label}</p>
            <textarea  ></textarea>
        </div>
        
    )
}