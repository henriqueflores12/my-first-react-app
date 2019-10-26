import React, { Component } from "react";
import logo from "./spartan 2.jpg";
import "./App.css";
// import FirstComponent from "./firstcomponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: []
    };
  }
  //  toggle=()=>{
  //    this.setState({isOn: !this.state.isOn});
  //  }

  inputUpDate = event => {
    this.setState({ input: event.target.value });
  };

  formSubmit = event => {
    console.log("***this is state***", this.state.items);
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input]
    });
  };

  render() {
    console.log("***this is state***", this.state.items);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>my-first-react-app my first list components</h1>

          <form onSubmit={this.formSubmit}>
            <input value={this.state.input} onChange={this.inputUpDate} />
            <button>Submit</button>
          </form>
          <ul>
            {this.state.items.map((items, index) => {
              return <li key={index}>{this.state.items[index]}</li>;
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
