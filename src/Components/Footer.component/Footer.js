import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-component'>
        <div className="footer">
            <h1 className='footer-headings'>About Us</h1>
            <ul className='footer-data'>
                <li >
                    Established: 02-05-2023,                    
                </li>
                <li>
                    Founder: Aditya Sijaria,                    
                </li>
                <li>
                    location India,                 
                </li>
            </ul>
            
        </div>
        <div className="footer">
        <h1 className='footer-headings'>outlets</h1>
            <ul className='footer-data'>
                <li>
                    72. vijay Nagar, Indore                  
                </li>
                <li>
                    72. Gandhi Nagar, Indore                   
                </li>
                <li>
                    89. Airport Road, Indore                   
                </li>
            </ul>
            
            
        </div>
        <div className="footer">
        <h1 className='footer-headings'>Contact-Us</h1>
            <ul className='footer-data'>
                <li>                   
                     <email>pizzadelivery@yopmail.com</email>                   
                </li>
                <li>
                    07313030                   
                </li>
                <li>
                    comment    
                </li>
            </ul>
            
        </div>
        
      
    </div>
  )
}

export default Footer
