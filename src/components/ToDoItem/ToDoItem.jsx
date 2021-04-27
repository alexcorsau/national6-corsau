import "./ToDoItem.css"
import trashCan from "./trash.svg"


export function ToDoItem(props){
    console.log(props);
    return(
        <div className="to-do-item">
            <input 
                type="checkbox"
                defaultChecked={props.checkValue}
                onChange={()=> {
                    props.updateCheckStatus(props.itemIndex,!props.checkValue)
                }}
            >

            </input>
            <p>{props.label}</p>
            <img id="trash" src={trashCan} alt="trash can" onClick={()=>props.removeItem(props.label)}></img>
        </div>
    );
}
