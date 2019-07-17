import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/jamstack-html5up-landed.png'
import pic09 from '../assets/images/jamstack-html5up-fractal.png'
import pic10 from '../assets/images/jamstack-html5up-big-picture.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>JAMstack - Modern and blazing fast apps</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>
                            Open-Source apps with design provided by <a href="https://html5up.net">HTML5Up</a>. Yours free! 
                        </h3>
                    </header>
                    <p>
                        A short list with web apps built in <a href="https://jamstack.org/">JAMstack</a> architecture.
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://appseed.us/apps/jamstack/html5up-landed" className="image">
                        <img src={pic08} alt="Open-source JAMstack app with HTML5Up Landed design - provided by AppSeed." />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h2>
                                    <a href="https://jamstack.org/">JAMstack</a> HTML5Up Landed
                                </h2>
                            </header>
                            <p>
                                Serverless app, designed by HTML5 Up and coded in Panini Static Generator. This free app can be used for a corporate website or a simple portfolio web app. 
                                Features: Coded in Panini, Blazing fast, FTP Deploy Script, Open source.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="https://appseed.us/apps/jamstack/html5up-landed" className="button">Read more</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://appseed.us/apps/jamstack/html5up-fractal" className="image">
                        <img src={pic09} alt="Open-source JAMstack app with HTML5Up Landed design - provided by AppSeed." />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h2>
                                    <a href="https://jamstack.org/">JAMstack</a> HTML5Up Fractal
                                </h2>
                            </header>
                            <p>
                                Serverless app, designed by HTML5 Up and coded in Panini Static Generator. This free app can be used for a corporate website or a simple portfolio web app. 
                                Features: Coded in Panini, Blazing fast, FTP Deploy Script, Open source.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="https://appseed.us/apps/jamstack/html5up-fractal" className="button">Read more</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://appseed.us/apps/jamstack/html5up-big-picture" className="image">
                        <img src={pic10} alt="Open-source JAMstack app with HTML5Up BigPicture design - provided by AppSeed." />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h2>
                                    <a href="https://jamstack.org/">JAMstack</a> HTML5Up BigPicture
                                </h2>
                            </header>
                            <p>
                                Serverless app, designed by HTML5 Up and coded in Panini Static Generator. This free app can be used for a corporate website or a simple portfolio web app. 
                                Features: Coded in Panini, Blazing fast, FTP Deploy Script, Open source.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="https://appseed.us/apps/jamstack/html5up-big-picture" className="button">Read more</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing