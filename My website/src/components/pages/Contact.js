import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="py-2 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className='float-end'>
                                Home/ Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container">
                    <div className='card Shadow'>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Contact Form</h2>
                                    <hr />
                                    <div className="form-group">
                                        <label className='mb-1'>Full Name</label>
                                        <input type="text" className='form-control' placeholder='enter full name' />
                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1'>Phone Number</label>
                                        <input type="text" className='form-control' placeholder='enter phone number' />
                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1'>Email Address</label>
                                        <input type="text" className='form-control' placeholder='enter email' />
                                    </div>
                                    <div className="form-group">
                                        <label className='mb-1'>Message</label>
                                        <textarea className='form-control' placeholder='Type your message...' rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className='btn btn-primary shadow mt-1 w-100'>Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className='main-heading'>Address Information</h5>
                                    <div className="underline"></div>
                                    <p>
                                        421102, kalyan (Maharashtra, India).
                                    </p>
                                    <p>
                                        Phone No : +91 7208994378
                                    </p>
                                    <p>
                                        Email : aakashyadav0202@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
