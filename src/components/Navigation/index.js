import React, { Component } from 'react';
import './index.css'
import ProfilePic from '../ProfilePic';

class Navigation extends Component {
    handleClick(evt) {
        let items = document.getElementsByClassName('menu-item');
        console.log(items);
        for  (let i= 0; i < items.length; i++){
            items[i].classList.remove('active');
        }
        console.log(evt.target);
        let current_element = evt.target;
        current_element.classList.add('active');
    }

    render() {
        return (
            <div className='sidebar' onClick={this.handleClick.bind(this)}>
             <ProfilePic />
            <a href ='#About'>
              <div className='menu-item active'>
                  About
              </div>
            </a>
            <a href ='#Tech'>
              <div className='menu-item'>
                  Technologies
              </div>
            </a>
            <a href ='#Contact'>
              <div className='menu-item'>
                  Contact
              </div>
            </a>
            
            <a href ='#Contact'>
              <div className='menu-item'>
                  JS Frameworks
              </div>
            </a>

            <a href ='#Contact'>
              <div className='menu-item'>
                  Web Technologies
              </div>
            </a>

            <a href ='#Contact'>
              <div className='menu-item'>
                  Testing
              </div>
            </a>

            
            <a href ='#Contact'>
              <div className='menu-item'>
                  Styles
              </div>
            </a>

            <a href ='#Contact'>
              <div className='menu-item'>
                  UX Tools
              </div>
            </a>

            <a href ='#Contact'>
              <div className='menu-item'>
                  Server Side
              </div>
            </a>

          </div>

        );
    }
}

export default Navigation;