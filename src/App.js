import React, {Component} from 'react';
import './App.css';
import{sampleText} from './sampleText'
import marked from 'marked'


class App extends Component{
  //on définit dans state le contenu de sampleText
  state = {
    text: sampleText
  }

  //on recupère les données du localStorage
  componentDidMount(){
    const text = localStorage.getItem('text')
    if(text){
      this.setState({text})
    }else{
      this.setState({ text: sampleText})
    }
    
  }

  //on sauvegarde dans le localStorage
  componentDidUpdate(){
    const {text} = this.state
    localStorage.setItem('text', text)
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
      <div className="container mb-5">
        <h1 className='text-center mb-5'>Markdown</h1>
        <div className="row">
          <div className="col-sm-6">
            <textarea 
              className='form-control' 
              rows='30' value={this.state.text} 
              onChange={this.handleChange} >  
            </textarea>
          </div>
          <div className="col-sm-6 result">
            <div dangerouslySetInnerHTML = 
              {this.renderText(this.state.text)} />            
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
