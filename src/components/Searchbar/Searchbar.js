import React, { Component } from 'react'
import  './Searchbar.css'


export default class Searchbar extends Component {
  state={
    query:''
  }
  hadnleInputSearch =(e)=>{
this.setState({query:e.target.value})
  }
  handleSubmit = (e)=>{
    e.preventDefault()
this.props.addNewQuery(this.state.query)
this.setState({query:''})
  }
  render() {
    const { query } = this.state
    return (
      
      <div>
      <header className="Searchbar">
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
    
        <input
        name="query"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={this.hadnleInputSearch}
        />
      </form>
    </header>
      </div>
    )
  }
}
