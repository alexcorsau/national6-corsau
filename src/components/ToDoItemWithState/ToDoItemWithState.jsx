import { Component } from "react";
import trashCan from "./trash.svg"

export class ToDoItemWithState extends Component {
    state= {
        nrOfClick:0,
    }

    handleIncreaseClick = ()=> {
        console.log("click on item: ", this.state.nrOfClick+1);
        this.setState({nrOfClick: this.state.nrOfClick+1});
    }
   
    render(){
        return(
            <div className="to-do-item" onClick={this.handleIncreaseClick}>
                <input type="checkbox" defaultChecked={this.props.checkValue}></input>
                <p>{this.props.label}</p>
                <img id="trash" src={trashCan} alt="delete button"></img>
                <p>{this.state.nrOfClick}</p>
            </div>
        )
    }
    

}