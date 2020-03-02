import React, {Component} from 'react';
import './App.css';
import{sampleText} from './sampleText'

class App extends Component{
  //on définit dans state le contenu de sampleText
  state = {
    text: sampleText
  }

  //fonction qui permet la modification du state
  handleChange = event => {
    const text = event.target.value
    this.setState({text})
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea 
              className='form-control' 
              row='40' value={this.state.text} 
              onChange={this.handleChange} >
  
            </textarea>
          </div>
          <div className="col-sm-6">
            <h2>Résultats</h2>
            {sampleText}
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
