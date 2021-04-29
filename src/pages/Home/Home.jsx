import { Component } from "react";
import { ToDoList } from "../../components/ToDoList/ToDoList";
import "./Home.css"
export class Home extends Component {
    state = {
        showToDoList: true,
      };
    
      toggleToDoListVisibility = () => {
        this.setState({ showToDoList: !this.state.showToDoList });
      };
      componentDidMount(){
          console.log("Home has finished mounting");
      }
      componentWillUnmount(){
        console.log("Home will be unmounted");
      }
      render(){
          return(
              <div className="home">
                  <button onClick={this.toggleToDoListVisibility}>
                        Hide/Show ToDoList
                    </button>
                    {this.state.showToDoList ? <ToDoList /> : null}
              </div>
          )
      }
}