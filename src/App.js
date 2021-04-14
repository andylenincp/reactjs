import React from 'react';
import './App.css';

function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.title}</h3>
      {props.mytext}
    </div>
  );
}

//const App = () => <div>This is my component: <Helloworld/></div>

/*
class App extends React.Component {
  render() {
    return <div>This is my component: <Helloworld/></div>;
  }
}
*/

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
