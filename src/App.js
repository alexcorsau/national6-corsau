import { Header } from "./components/Header/Header";
import { ToDoList } from "./components/ToDoList/ToDoList";

import './App.css';
import { Component } from "react";

class App extends Component {
  state = {
    showToDoList: true,
  };

  toggleToDoListVisibility = () => {
    this.setState({ showToDoList: !this.state.showToDoList });
  };

  render() {
    return (
      <div className="App" id="app">
        <Header />
        <button onClick={this.toggleToDoListVisibility}>
          Hide/Show ToDoList
        </button>
        {this.state.showToDoList ? <ToDoList /> : null}
      </div>
    );
  }
}

export default App;
