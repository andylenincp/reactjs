import React from 'react';
import './App.css';

/* function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.title}</h3>
      {props.mytext}
    </div>
  );
} */

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.title}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      )
    } else {
      return <h1>There are not elements <button onClick={this.toggleShow}>Toggle Show</button></h1>
    }
  }
}

// const App = () => <div>This is my component: <Helloworld/></div>

/* class App extends React.Component {
  render() {
    return <div>This is my component: <Helloworld/></div>;
  }
} */

function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Andy" title="Component 1" />
      <Helloworld mytext="Castillo" title="Component 2" />
      <Helloworld mytext="Palma" title="Component 3" />
    </div>
  );
}

export default App;
