import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import Vmc from "./page/Vmc";
import Services from "./page/Services";

const Home = () => {
    return (
        <div>
            <Slider />
            <section className='section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className='main-heading'>Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>So, we will help you to enhance your business and your ideas in this digital World. And even managing your website and further updations and maintaining a Bug free website. And Our Mission is to educate the orphan child and empower them.</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our vision mission and values */}

            <Vmc />

            {/* Our Services */}

            <Services />

        </div>

    )
}

export default Home;
