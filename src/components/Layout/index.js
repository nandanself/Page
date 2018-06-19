import React, { Component } from 'react';
import './index.css';
import Navigation from '../Navigation';
import Contact from '../Contact'
import Card from '../Card';
import About from '../About';
import {data} from '../../data.js'

class Layout extends Component {
    render() {
        console.log(data)
        let cardItems = data && data.map((item,index) => {
            return <Card item={item}/>
        })
        return (
            <div className='layout'>
                <Navigation/>
                 <div className='inner-layout'>
                 <div className='about' id='About'>
                 
                        <About />
                    </div> 
                    <div className='tech' id='Tech'>
                        
                        {cardItems}
                    </div> 
                    <div className='contact' id='Contact'>
                        
                        <Contact />
                    </div> 
                </div>
            </div>
        );
    }
}

export default Layout;