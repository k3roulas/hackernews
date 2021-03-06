import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: '3',
    points: '3',
    objectID: '0',
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan abramov, Andrew Clark',
    num_comments: '2',
    points: '5',
    objectID: '1',
  },
]

function isSearched(searchTerm) {
  return function (item) {
    return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

const Button = ({onClick, className='', children}) =>
  <button
    className={className}
    onClick={onClick}
    type='button'
    >
    {children}
  </button>

const Search = ({ value, onChange, children})  =>
  <form>
    {children}
    <input
      onChange={onChange}
      value={value}
      ></input>
  </form>

const Table = ({list, searchTerm, onDismiss})  =>
  <div>
  {
    list.filter(isSearched(searchTerm)).map(item =>
      <div key={item.objectID}>
        <span><a href={item.url}>{item.title}</a></span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <Button
          onClick={() => onDismiss(item.objectID)}
          >
          dismiss
        </Button>
      </div>
  )}
  </div>

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      list,
    }

    this.onDismiss = this.onDismiss.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onDismiss(id) {
    console.log(id);
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }

  onChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {

    const {searchTerm, list} = this.state;

    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onChange}
          >
          Search
        </Search>

        <Table
          list={list}
          searchTerm={searchTerm}
          onDismiss={this.onDismiss}
          />
      </div>
    );
  }
}

export default App;
