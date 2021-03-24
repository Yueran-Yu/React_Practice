import React from 'react';
import './App.css';
import {Route, Link} from "react-router-dom";

const HomePage = props => {
  return (
      <div>
        <Link to='/topics'>Topics</Link>
        <h1>HOME PAGE</h1>
      </div>
  )
}

const TopicList = () => {
  return (
      <div><h1>TOPIC LIST PAGE</h1></div>
  )
}

const TopicDetail = props => {
  console.log(props)
  return (
      <div><h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1></div>
  )
}

function App() {
  return (
      <div className="App">
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/topics' component={TopicList}/>
        <Route path='/topics/:topicId' component={TopicDetail}/>
      </div>
  );
}

export default App;
