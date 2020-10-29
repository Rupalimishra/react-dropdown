import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'americium'};
  
      this.handleChange = this.handleChange.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    
  
    render() {
      return (
        <form>
          <label>
            Choose an Element:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="neptunium">Neptunium</option>
              <option value="plutonium">Plutonium</option>
              <option value="americium">Americium</option>
              <option value="curium">Curium</option>
              <option value="Berkelium">Berkelium</option>
              <option value="californium">Californium</option>
              <option value="einsteinium">Einsteinium</option>
              <option value="fermium">Fermium</option>
              <option value="mendelevium">Mendelevium</option>
              <option value="nobelium">Nobelium</option>
              <option value="lawrencium">Lawrencium</option>
              <option value="rutherfordium">Rutherfordium</option>
              <option value="bohrium">Bohrium</option>
              <option value="hassium">Hassium</option>
              <option value="meitnerium">Meitnerium</option>
              <option value="darmstadtium">Darmstadtium</option>
              <option value="roentgenium">Roentgenium</option>
              <option value="roentgenium">Copernicium</option>
            </select>
          </label>
         
        </form>
      );
    }
  }
  ReactDOM.render(<App />, document.querySelector("#root"));