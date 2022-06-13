import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <h6>Company Information</h6>
                    <hr />
                    <p className='text-white'>
                        
                        Our Company helps to create a user friendly web-site for small scale businesses.
                        And we will be managing and handling the further customizaion and Bugs. 
                    </p>
                </div>
                <div className="col-md-4 text-center">
                    <h6>Quick Links</h6>
                    <hr />
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
                </div>
                <div className="col-md-4 text-center">
                    <h6>Contact Information</h6>
                    <hr />
                    <div><p className='text-white mb-1'>421102, Kalyan (Maharashtra, India).</p></div>
                    <div><p className='text-white mb-1'>+91 7208994378</p></div>
                    <div><p className='text-white mb-1'>aakashyadav0202@gmail.com</p></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
