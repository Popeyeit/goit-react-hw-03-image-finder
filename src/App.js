import React, { Component,useState } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';
import {searchGallery} from './helpers/request'
import Loader from 'react-loader-spinner';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import  './App.css'


class App extends Component {
  state={
    gallery:[],
    loader:false,
    error:null,
    query:'',
    page:1,
    bigImg:''
  }
  addNewQuery=(query)=>{
    this.setState({query,page:1,gallery:[]})
  }
  requestByQuqery=()=>{
   const { query, page,loader} = this.state
   this.setState({loader: true})
    searchGallery(query,page).then(res=>{
      this.setState((prev)=>({gallery:[...prev.gallery,...res.data.hits],
    page: prev.page +1}))}).catch((error)=>this.setState({error: error.message})).finally(()=>this.setState({loader:false}))
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.gallery.length>12&& this.state.gallery !== prevState.gallery) {

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
    if(prevState.query !== this.state.query){
      this.requestByQuqery()
    }
  }
  showModal=(img)=>{
    this.setState({bigImg:img})
  }
  
  
  render() {
const {gallery,loader,error,bigImg  } = this.state
if(error){
  return <h1>{error}</h1>
}
    return (
      <div className="App">
      <Searchbar addNewQuery={this.addNewQuery}/>
      {gallery.length>0&&<ImageGallery showModal={this.showModal} gallery={gallery}/>} 
      {loader&&<Loader/>}
      {!loader&&gallery.length>0&&<Button requestByQuqery={this.requestByQuqery}/> }
      {bigImg&&<Modal img={bigImg} showModal={this.showModal}/>}
      </div>
    );
  }
}

export default App;











