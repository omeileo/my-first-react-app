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
