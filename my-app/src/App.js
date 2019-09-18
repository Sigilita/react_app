/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, {Component} from "react"
import logo from './logo.svg';
import './App.css';
import Person from './Component/Person'
import PeopleList from './Component/PersonList'
import Form from './Component/SubmitPerson'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      apiResponse: [],
      peopleArray: []
    };
  }

  callAPI(){
    fetch("http://localhost:8000/app/people/all")
    .then( response => response.json())
    .then(
        // handle the result
        (result) => {
            this.setState({
                apiResponse : result
            });
        },
        // Handle error 
        (error) => {
            this.setState({
                error
            })
        },
    )

  }

  componentDidMount(){
    this.callAPI();
  }
  render() {
    const {error, apiResponse} = this.state;
    if(error){
        return <div>Error loading data</div>
    }else{
        return(
            <div>
              <div><PeopleList peopleArray = {apiResponse}/></div>
              <div><Form/></div>
            </div>
        );
    }    
  }
}

export default App;

//      <ul>{this.state.apiResponse.map((person, i) => <Person name={person.name} email={person.email} key={i} />)}</ul>