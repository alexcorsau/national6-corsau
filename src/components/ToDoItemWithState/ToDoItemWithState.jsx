import { Component } from "react";

export class ToDoItemWithState extends Component {
    state= {
        nrOfClick:0,
    }

    handleIncreaseClick = ()=> {
        console.log("click on item");
        this.setState({nrOfClick:1});
    }
   
    render(){
        return(
            <div className="to-do-item" onClick={this.handleIncreaseClick}>
                <input type="checkbox" defaultChecked={this.props.checkValue}></input>
                <p>{this.props.label}</p>
                <img id="trash" src="https://www.flaticon.com/svg/vstatic/svg/1345/1345823.svg?token=exp=1618938207~hmac=5f9d940dc13f6c93d7770f3215191848" alt="delete button"></img>
                <p>{this.state.nrOfClick}</p>
            </div>
        )
    }
    

}