import React from 'react';
import Vmc from './page/Vmc'

const About = () => {
    return (
        <div>
            <section className="py-2 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className='float-end'>
                                Home/ About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light border-bottom">
                <div className="container">
                    <h5 className='main-heading'>Our Company</h5>
                    <div className="underline"></div>
                    <p>
                        So, we will help you to enhance your business and your ideas in this digital World. And even managing your website and further updations and maintaining a Bug free website. And Our Mission is to educate the orphan child and empower them.
                    </p>
                </div>
            </section>

            {/* Our vision mission and values */}

            <Vmc />

        </div>
    )
}

export default About;
