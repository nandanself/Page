import React from 'react';
import './index.css'
const Contact = () => {
    return (
        <form>
        <div className='form-wrapper'>
        <div className='form-left'>
        <input type='text' placeholder='Name'/>
        <input type='email' placeholder='Email'/>
        <input type='text' placeholder='Contact'/>
      </div>
      <div className='form-right'>
        <textarea rows='12' cols='200' placeholder='Message'/>
       </div>
       <button>Submit</button>
        </div>
         
        
        </form>
    );
};

export default Contact;