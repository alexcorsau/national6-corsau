import "./ToDoItem.css"

export function ToDoItem(props){
    console.log(props);
    return(
        <div className="to-do-item">
            <input type="checkbox" defaultChecked={props.checkValue}></input>
            <p>{props.label}</p>
            <img id="trash" src="https://www.flaticon.com/svg/vstatic/svg/1345/1345823.svg?token=exp=1618938207~hmac=5f9d940dc13f6c93d7770f3215191848" alt="delete button"></img>
        </div>
    );
}