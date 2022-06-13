import React from 'react'
import Service1 from "../../image/devloper1.jpg";
import Service2 from "../../image/bug.jpg";
import Service3 from "../../image/orphan1.jpg";
import {Link} from "react-router-dom"

const Services = () => {
    return (
        <div>
            <section className='section border-top'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className='main-heading'>Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="image error" />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>So, we will help you to enhance your business and your ideas in this digital World.</p>
                                    <Link to="/" className='btn btn-link'>Read More...</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service2} className="w-100 border-bottom" alt="image error" />
                                <div className="card-body">
                                    <h6>Service 2</h6>
                                    <div className="underline"></div>
                                    <p>Managing your website and further updations and Maintaining a Bug free website.</p>
                                    <Link to="/" className='btn btn-link'>Read More...</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service3} className="w-100 border-bottom" alt="image error" />
                                <div className="card-body">
                                    <h6>Service 3</h6>
                                    <div className="underline"></div>
                                    <p>And Our Mission is to educate the orphan child and empower them.</p>
                                    <Link to="/" className='btn btn-link'>Read More...</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
