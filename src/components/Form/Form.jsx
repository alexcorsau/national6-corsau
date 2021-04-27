import { Component } from "react";
import { FormField } from "./FormField/FormField";
import { FormMessage } from "./FormMessage/FormMessage";
import { SendButton } from "./SendButton/SendButton";

import "./Form.css"

export class Form extends Component {

state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
}

handleChange = (event) => {
    // this.setState({`${target.key}`: event.target.value });
  };

render(){
    console.log();
    return (
        <div className="form">
            <FormField key="firstName" label="FIRST NAME" handleChange={this.handleChange}/>
            <FormField key="lastName" label="LAST NAME" handleChange={this.handleChange}/>
            <FormField key="email" label="EMAIL"handleChange={this.handleChange}/>
            <FormMessage key="message" label="MESSAGE" handleChange={this.handleChange}/>
            <SendButton/>
        </div>
    )
    
}
}
    
