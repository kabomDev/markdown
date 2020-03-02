import React, {Component} from 'react';
import './App.css';
import{sampleText} from './sampleText'
import marked from 'marked'


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

  //on met dans une variable la methode marked
  renderText = text => {
    const __html = marked(text, {sanitize: true})
    return {__html}
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
            <div dangerouslySetInnerHTML = 
              {this.renderText(this.state.text)} />            
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
