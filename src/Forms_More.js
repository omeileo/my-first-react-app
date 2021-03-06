import React, { Component } from 'react';
import './App.css';
import './semantic/dist/semantic.css';

export default class FormsMore extends Component 
{
    state = {
        nameValue: "Kratos",
        names: []
    };

    // getInitialState()
    // {
    //     return { names: [] };
    // }

    handleChange = (value) => {
        this.setState({
            nameValue: value,
        });
    };

    handleFormSubmit = (value) => {
        this.setState({ names: this.state.names.concat(value) });
    };

    render()
    {
        return(
            <div>
                <Form2 
                    value = {this.nameValue} 
                    onNameChange = {this.handleChange} 
                    onSubmit = {this.handleFormSubmit}
                />
                <br/>

                <Form1 
                    name = {this.state.nameValue}
                />
                <br/>

                <Form3 
                    names = {this.state.names}
                />
            </div>
        );
    }
}

class Form1 extends Component
{
    onButtonClick = (event) => {
        const button = event.target;
        console.log(button.name + ' was clicked (Value: ' + button.value + ')');
    }
    
    render()
    {
        return(
            <div className="ui basic content center aligned segment">
                <h1>How do you feel about React, {this.props.name}?</h1>

                <button
                    name = "button-1"
                    value = "great"
                    onClick = {this.onButtonClick}
                    className = "ui basic blue button"
                >
                Great
                </button>

                <button
                    name = 'button-2'
                    value = 'amazing'
                    onClick = {this.onButtonClick}
                    className = "ui basic green button"
                >
                Amazing
                </button>

                <button 
                    name = 'button-3'
                    value = 'ok'
                    onClick = {this.onButtonClick}
                    className = "ui basic purple button"
                >
                Okay
                </button>
            </div>
        );
    }
}

class Form2 extends Component
{   
    handleChange = (event) => {
        this.props.onNameChange(event.target.value);
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        if(this.refs.name.value !== '')
        {
            console.log(this.refs.name.value);
            this.props.onSubmit(this.refs.name.value);
            this.refs.name.value = '';
        }
    };
    
    render()
    {
        return(
            <div className="ui centered card">
                <div className="content">
                    <form onSubmit={this.handleFormSubmit} className='ui form'>
                        <label>
                            Your name: 
                            <input
                                type = 'text'    
                                // value = {this.props.nameValue}
                                placeholder = 'John'
                                ref = 'name'
                                className = 'field'
                                onChange = {this.handleChange}
                            />
                        </label>

                        <input
                            type = 'submit'
                            className = 'ui basic blue button'
                        />
                    </form>
                </div>
            </div>
        );
    }
}

class Form3 extends Component
{  
    render()
    {
        return(
            <div className="content">
                <h3>Names: </h3>
                <ul>
                    {this.props.names.map((name, i) => 
                        <li key={i}>{name}</li>
                    )}
                </ul>
            </div>
        );
    }
}