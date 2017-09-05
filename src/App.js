import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const post =
{
  date: new Date(),
  text: "I'm learning React now!",
  author:
  {
    name: "Jase-Omeileo West",
    avatarUrl: "https://avatars1.githubusercontent.com/u/20757931?v=4&u=35a4aab8e3a1ca975db77dd130e9a7b653894ea0&s=400"
  }
};

function formatDate(date)
{
  return date.toLocaleDateString();
}

function Avatar(props)
{
  return(
    <img 
      className="Avatar" 
      src={props.user.avatarUrl}
      alt={props.user.name}/>
  );
}

function UserInfo(props)
{
  return(
    <div className="UserInfo">
      <Avatar user={props.user}/>

      <div className="UserInfo-name">
        <div>
          {props.user.name}
        </div>
      </div>
    </div>
  );
}

function Post(props)
{
  return(
    <div className="Post">
      <UserInfo user={props.author} />

      <div>
        {props.text}
      </div>

      <div>
        {formatDate(props.date)}
      </div>
    </div>
  );
}

class Clock extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount()
  {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount()
  {
    clearInterval(this.timerID);
  }

  tick()
  {
    this.setState({
      date: new Date()
    });
  }

  render()
  {
    return(
      <div className = "Clock">
        <h3>It's now { this.state.date.toLocaleTimeString() }</h3>
      </div>
    );
  }
}

class CounterButton extends Component
{
  constructor(props)
  {
    super(props);
    this.state = { counter: 1 };

    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick = () => {
  //   this.setState(( prevState ) => ({
  //     counter: prevState.counter + 1
  //   }));
  // };

  handleClick()
  {
    this.setState(( prevState ) => ({
      counter: prevState.counter + 1
    }));
  }

  render()
  {
    return(
      <button onClick = { this.handleClick }>
        {this.state.counter}
      </button>
    );
  }
}

class ToggleButton extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make 'this' work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()
  {
    this.setState(( prevState ) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render()
  {
    return(
      <button onClick = { this.handleClick }>
        { this.state.isToggleOn ? 'ON' : 'OFF' }
      </button>
    );
  }
}

class LoginControl extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {isLoggedIn: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick()
  {
    this.setState(() => ({isLoggedIn: true}));
  }

  handleLogoutClick()
  {
    this.setState(() => ({isLoggedIn: false}));
  }

  render()
  {
    const isLoggedIn = this.state.isLoggedIn;

    // let button = null;

    // if(isLoggedIn)
    // {
    //   button = <LogoutButton onClick={ this.handleLogoutClick }/>
    // }
    // else
    // {
    //   button = <LoginButton onClick={ this.handleLoginClick }/>
    // }

    return(
      <div>
        <Greetings isLoggedIn={isLoggedIn}/>

        { isLoggedIn ? 
          (<LogoutButton onClick={ this.handleLogoutClick }/>) : 
          (<LoginButton onClick={ this.handleLoginClick }/>)
        }
      </div>
    );
  }
}

function UserGreeting(props)
{
  return <h2>Welcome Back</h2>;
}

function GuestGreeting(props)
{
  return <h2>Please sign up</h2>;
}

function Greetings(props)
{
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn)
  {
    return <UserGreeting />;
  }
  else
  {
    return <GuestGreeting />;
  }
}

function LoginButton(props)
{
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props)
{
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  );  
}

class App extends Component
{
  render()
  {
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>My Foray into React</h2>
        </div>
        
        <Post
          date={post.date}
          text={post.text}
          author={post.author}/>

        <Clock />
        <Clock />

        <CounterButton />
        <ToggleButton />
        <LoginControl />
      </div>
    );
  }
}

export default App;

// class App extends Component 
// {
//   render() 
//   {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
        
//         <p className="App-intro">
//           <Welcome name="Popcaan"/>
//           <Welcome name="Teacha"/>
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
