import { Component } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export class ToDoList extends Component {
    state = {
        toDoList : [],
        inputValue:"",
        shouldCreateUser: false,
        inputIsValid: true,
    }

    removeItem=(itemText)=>{
        const filteredToDoList = this.state.toDoList.filter(itemData => itemData.item!==itemText);
        this.setState({toDoList: filteredToDoList});
        const payload= {
            id:"acorsau",
            todo:filteredToDoList
            };
        fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau",{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    }

    handleInputChange = (event)=> {
        this.setState({inputValue: event.target.value});
        if(this.state.inputValue!=="") {
            this.setState({inputIsValid:true});
        } else {
            this.setState({inputIsValid:false});
        }
    }

    handleAddItem = ()=>{
        if(this.state.inputValue!==""){
        this.setState({
            toDoList: [
                {checked:false, item:this.state.inputValue},
                ...this.state.toDoList
            ],
            inputValue:"",
            inputIsValid:true,
        });
        const payload= {
            id:"acorsau",
            todo:[{checked:false, item:this.state.inputValue},
                ...this.state.toDoList]
            };
       
            if(this.state.shouldCreateUser) {
                fetch("https://simple-json-server-scit.herokuapp.com/todo",{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })
                this.setState({shouldCreateUser: false});
            } else {
                    fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau",{
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })
                }
        } else {
            this.setState({inputIsValid:false});
        }
        
    }

    updateCheckStatus=(index,value)=>{
        console.log(index,value);
        const newList = this.state.toDoList.map((item,itemIndex)=>{
            if(itemIndex===index) {
                item.checked = value;
            }
            return item;
        })
        this.setState({toDoList:newList});

        const payload= {
            id:"acorsau",
            todo:newList
            };
        fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau",{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
    }

    componentDidMount(){
        console.log("ToDo List has finished mounting");
        fetch("https://simple-json-server-scit.herokuapp.com/todo/acorsau")
            .then((r)=>r.json())
            .then((json) => {
                console.log(json);
                if(json.todo) {
                    this.setState({toDoList:json.todo})
                } else {
                    this.setState({shouldCreateUser: true})
                }  
            }
        )
    }

    componentDidUpdate(){
        console.log("ToDo List has Updated");
    }

    render(){
        let addItemClassName = "";
        if(!this.state.inputIsValid) addItemClassName+=" add-item--invalid";
        return(
            <div className="to-do-list">
                {
                    this.state.toDoList.map((itemData,index) => (
                        <ToDoItem 
                        key={itemData.item}
                        checkValue={itemData.checked} 
                        label={itemData.item} 
                        removeItem={this.removeItem}
                        itemIndex ={index}
                        updateCheckStatus={this.updateCheckStatus}
                        />
                        ))
                }
                <div>
                    <input className={addItemClassName} value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button onClick={this.handleAddItem}>+</button>
                </div>
            </div>
        )
    }
}

// And you want a set of, say, names, you would do:

// let namesSet = new Set(array.map(item => item.name));