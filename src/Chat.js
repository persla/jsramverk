import React from "react";
import io from "socket.io-client";
// import { Card, Form, Input, Button, Error } from "./context/AuthForms";

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            timestamp: '',
            messages: [],
            reportSended: true,
            fromAdmin: "From Admin",
            initialMassage: " är välkommen till chatten!",
        };

        // this.socket = io('localhost:5000');
        this.socket = io('https://socket.teachmeapp.me');
        // const socket = io('https://socket.teachmeapp.me');


        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
            // console.log(data);
            //
            console.log(data);

        });

        this.socket.on('RECEIVE_MESSAGE_OLD', function(data){
            // addMessage(data[5]);
            for (var i = 0; i < data.length; i++) {
              addMessage(data[i]);
            }
            console.log(data);
            // this.setState({messages: data});

        });


        const addMessage = data => {

            this.setState({messages: [...this.state.messages, data]});

        };

        this.sendMessage = ev => {
            // ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message,
                timestamp: new Date().toLocaleDateString('se') + ' ' +new Date().toLocaleTimeString()
            })
            this.setState({message: ''});
        }

        this.sendMessage1 = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.fromAdmin,
                message: this.state.username + this.state.initialMassage,
                timestamp: new Date().toLocaleDateString('se') + ' ' +new Date().toLocaleTimeString()
            })
            this.setState({message: ''});
            this.setState({reportSended: false});
        }

        this.keyPressed = ev => {
            if (ev.key === "Enter") {
                this.sendMessage();
            }
        }

    }
    componentDidUpdate () {
        const el = this.refs.wrap;
        el.scrollTop = el.scrollHeight;
    }


    render(){
        return (
        <div className="container">
                        <div className="card-body">
                        <h2>chatt</h2>
                        <div className="card-title">Meddelanden</div>
                            <div className="messages" ref='wrap'>
                                {this.state.messages.map((message, i) => {
                                    return (
                                        <div className="message" key={i}><b>{message.author}</b> <span className='time'> {message.timestamp}</span> <p> {message.message}</p> </div>
                                    )
                                })}
                            </div>

                        </div>
                        {this.state.reportSended ?
                        <div className='form-wrapper'>
                            <label htmlFor="email">Välj ett nick och klicka på Join!</label>
                            <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="email"/>
                            <button onClick={this.sendMessage1} className="btn btn-primary form-control">Join</button>
                            </div>
                            :
                            <div className='form-wrapper'>
                            <label htmlFor="email">Meddelanden från: {this.state.username}</label>
                            <input type="text" placeholder="Type a message and press enter..." className="email" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})} onKeyPress={this.keyPressed}/>

                        </div>
                        }
        </div>
        );
    }
}

export default Chat;
