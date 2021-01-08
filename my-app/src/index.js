import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom'
import createReactClass from 'create-react-class';

class dasda extends React.Component{
  // static childContextTypes
  
}

const App = createReactClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = createReactClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = createReactClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = createReactClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)