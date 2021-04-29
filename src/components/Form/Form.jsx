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
        message: "",
        allInputsValid: true
    }

    handleChange = (event,string) => {
        // let entries = Object.entries(this.state);
        // console.log(entries);
        console.log(Object.keys(this.state).filter((item)=>item===string).toString());
        // console.log("newState: ",newState);
        this.setState({[Object.keys(this.state).filter((item)=>item===string).toString()]:event.target.value});
        // this.state= newStateObject;
        console.log("this.state: ",this.state);

        // if(()
        // &&()
        // &&()
        // &&()
        // )
    }

    handleSend = () => {
        console.log("Send Button Pressed");
        console.log(this.state.allInputsValid);
        if(this.state.allInputsValid) {
            window.alert("Message has been sent!");
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                allInputsValid: false});
            
        } else {

            }
    }

    componentDidUpdate(){
        console.log("this.state UPDATED: ",this.state);
    }

    render(){
        console.log();
        // let inputFieldClass = "input-field";
        // if(this.state.firstName===""){

        // }
        return (
            <div className="form">
                <FormField 
                    key="firstName"
                    id="firstName"
                    label="FIRST NAME" 
                    handleChange={this.handleChange}
                    // className=
                />

                <FormField 
                    key="lastName" 
                    id="lastName"
                    label="LAST NAME" 
                    handleChange={this.handleChange}
                />
                <FormField 
                    key="email"
                    id="email"
                    label="EMAIL" 
                    handleChange={this.handleChange}
                />

                <FormMessage 
                    key="message"
                    id="message"
                    label="MESSAGE" 
                    handleChange={this.handleChange}
                />

                <SendButton
                    handleSend={this.handleSend}
                />
            </div>
        )
        
    }
}
    
