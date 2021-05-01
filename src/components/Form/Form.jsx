import { Component } from "react";
import { FormField } from "./FormField/FormField";
import { FormMessage } from "./FormMessage/FormMessage";
import { SendButton } from "./SendButton/SendButton";
import { ConfirmationMessage } from "./ConfirmationMessage/ConfirmationMessage"

import "./Form.css"


export class Form extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        firstNameIsValid: null,
        lastNameIsValid: null,
        emailIsValid: null,
        messageIsValid: null,
        sentData: false
    }

    handleChange = (event,string) => {
        // console.log(Object.keys(this.state).filter((item)=>item===string).toString());
        this.setState({[Object.keys(this.state).filter((item)=>item===string).toString()]:event.target.value});
        console.log("this.state: ",this.state);
        // if(this.state.firstName!=="") {
        //     this.setState({firstNameIsValid:true});
        //     } else {
        //         this.setState({firstNameIsValid:false});
        //         };
        // if(this.state.lastName!==""){
        //     this.setState({lastNameIsValid:true});   
        //     } else {
        //         this.setState({lastNameIsValid:false});
        //         };
        // if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
        //     this.setState({emailIsValid:true});
        //     } else {
        //         this.setState({emailIsValid:false});
        //         };
        // if(this.state.message!=="") {
        //     this.setState({messageIsValid:true});
        //     } else {
        //         this.setState({messageIsValid:false});
        //         };
    }

    handleSend = () => {
        console.log("Send Button Pressed");
        if(this.state.firstName!=="") {
            this.setState({firstNameIsValid:true});
            } else {
                this.setState({firstNameIsValid:false});
                };
        if(this.state.lastName!==""){
            this.setState({lastNameIsValid:true});   
            } else {
                this.setState({lastNameIsValid:false});
                };
        if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
            this.setState({emailIsValid:true});
            } else {
                this.setState({emailIsValid:false});
                };
        if(this.state.message!=="") {
            this.setState({messageIsValid:true});
            } else {
                this.setState({messageIsValid:false});
                };
        if(this.state.firstNameIsValid && this.state.lastNameIsValid && this.state.emailIsValid && this.state.messageIsValid) {
            console.log("form is valid and data is sent");
            this.setState({sentData:true});
        }

        if(this.state.firstName && this.state.lastName && (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) && this.state.message) {
            console.log("form is valid and data is sent");
            this.setState({sentData:true});
        }
    }

    closeMessage=()=> {
        console.log("close message");
        window.location="/";
    }

    render(){
        return (
            <div className="form">
                <FormField 
                    key="firstName"
                    id="firstName"
                    label="FIRST NAME" 
                    handleChange={this.handleChange}
                    invalid = {this.state.firstNameIsValid}
                />

                <FormField 
                    key="lastName" 
                    id="lastName"
                    label="LAST NAME" 
                    handleChange={this.handleChange}
                    invalid = {this.state.lastNameIsValid}
                />
                <FormField 
                    key="email"
                    id="email"
                    label="EMAIL" 
                    handleChange={this.handleChange}
                    invalid = {this.state.emailIsValid}
                />

                <FormMessage 
                    key="message"
                    id="message"
                    label="MESSAGE" 
                    handleChange={this.handleChange}
                    invalid = {this.state.messageIsValid}
                />

                <SendButton
                    handleSend={this.handleSend}
                />

                {this.state.sentData ? <ConfirmationMessage
                closeMessage={this.closeMessage}
                /> : null }
                
            </div>
        )
        
    }
}
    
