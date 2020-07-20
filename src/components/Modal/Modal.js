import React, { Component } from 'react'
import './Modal.css'




export default class Modal extends Component {
    closeModalByEscape =(e)=>{
        if(e.code === 'Escape'){
            this.props.showModal(null)
        }
        console.log(e.code)
    }
    closeModalByClick=(e)=>{
        if(e.target.nodeName === 'DIV')
        this.props.showModal(null)
            
        
    }
    componentDidMount() {
        console.log('open')
        window.addEventListener('keydown',this.closeModalByEscape)
        document.addEventListener('click',this.closeModalByClick)
    }
    componentWillUnmount() {
        console.log('delete')
        window.removeEventListener('keydown',this.closeModalByEscape)
document.removeEventListener('click',this.closeModalByClick)
    }
    
    render() {
        return (
            <div className="Overlay">
        <div className="Modal">
          <img src={this.props.img} alt="" />
        </div>
      </div>
        )
    }
}


