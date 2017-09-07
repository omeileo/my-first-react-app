import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Form extends Component
{
    render()
    {
        return(
            <div className="App">
                <Header title="My Foray into React"/>
                <LoginForm />
                <EssayForm />
                <FlavorForm />
                <Reservation />

                <Calculator />
            </div>
        ); 
    }
}

function Header(props)
{
  return(
    <div className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h2>{props.title}</h2>
    </div>
  );
}

class LoginForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event)
    {
        this.setState({value: event.target.value});
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit} >
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Sumbit"/>
            </form>
        );
    }
}

class EssayForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {value: "Please write an essay about your favorite DOM element."};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    handleSubmit(event)
    {
        this.setState({value: event.target.value});
    }

    render()
    {
        return(
            <form>
                <label>
                    Write something:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class FlavorForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    handleSubmit(event)
    {
        this.setState({value: event.target.value});
    }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

class Reservation extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    render()
    {
        return(
            <form>
                <label>
                    Is going:
                    <input 
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleChange}
                    />
                </label>
                <br />

                <label>
                    Number of guests:
                    <input 
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleChange}
                    />
                </label>
            </form>
        );
    }
}

const scaleNames = {
    c: "Celcius",
    f: "Fahrenheit"
};

function toCelcius(fahrenheit)
{
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celcius)
{
    return (celcius / 5 * 9) + 32;
}

function tryConvert(temperature, convert)
{
    const input = parseFloat(temperature);
    if (Number.isNaN(input))
    {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    
    return rounded.toString();
}

function BoilingVerdict(props)
{
    if(props.celcius >= 100)
    {
        return <p>The water will boil</p>
    }

    return <p>The water will not boil</p>
}

class TemperatureInput extends Component
{
    constructor(props)
    {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        this.props.onTemperatureChange(event.target.value);
    }

    render()
    {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

class Calculator extends Component
{
    constructor(props)
    {
        super(props);
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelciusChange(temperature)
    {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature)
    {
        this.setState({scale: 'f', temperature});
    }

    render()
    {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput 
                    scale = 'c'
                    temperature = {celcius}
                    onTemperatureChange = {this.handleCelciusChange} />

                <TemperatureInput 
                    scale = 'f'
                    temperature = {fahrenheit}
                    onTemperatureChange = {this.handleFahrenheitChange}/>

                <BoilingVerdict 
                    celcius = {parseFloat(celcius)}/>
            </div>
        );
    }
}