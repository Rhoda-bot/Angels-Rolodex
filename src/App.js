import { Component } from 'react';
import { CardList } from './components/card-list/card-list-component';
import './App.css';
import { SearchBox } from './components/search-box/search-box-component';


  class App extends Component {
    constructor () {
      super();
      this.state = {
        angels: [],
        searchField: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( users => this.setState({ angels: users }))
    }
     handleChange = e =>{
     this.setState({ searchField: e.target.value })
    }

    render () {
      const { angels, searchField } = this.state;
      const filteredAngels = angels.filter( angel => angel.name.toLowerCase().includes(searchField.toLowerCase()) )
      return (
        <div className="App">
          <h1>Algels Rolodex</h1>
          {/* <input type="search" placeholder='search angels' onChange={ }/> */}
          <SearchBox 
            placeholder='search angels'
            handleChange={ this.handleChange}
          />
          <CardList angels={filteredAngels}></CardList>
         
        </div>
      );
    }
  }


export default App;
