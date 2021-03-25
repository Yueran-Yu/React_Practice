import React from 'react';
import './App.css';
import {Route, Link} from "react-router-dom";

const HomePage = props => {
  return (
      <div>
        {/*<Link to='/topics'>Topics</Link>*/}
        <button onClick={() => props.history.push('topics')}>Topic</button>
        <h1>HOME PAGE</h1>

      </div>
  )
}

const TopicList = props => {
  console.log(props)
  return (
      <div>
        <h1>TOPIC LIST PAGE</h1>
        <Link to={`${props.match.url}/13`}>TO 13</Link><br/>
        <Link to={`${props.match.url}/15`}>TO 15</Link><br/>
        <Link to={`${props.match.url}/18`}>TO 18</Link><br/>
        <Link to={`${props.match.url}/21`}>TO 21</Link>
      </div>
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
        <Route exact path='/happy/topics' component={TopicList}/>
        <Route path='/happy/topics/:topicId' component={TopicDetail}/>
      </div>
  );
}

export default App;
