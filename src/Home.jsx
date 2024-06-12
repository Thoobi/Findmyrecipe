// import React, { useState } from 'react';
import './Home.css';
import image from "./assets/findmysauce.svg"
import fruitA from './assets/cabbage.svg'
import pepper from './assets/pepper.svg'
import keto1 from './assets/keto1.svg'
import keto2 from './assets/keto2.svg'
import { FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

function Home () 
{
    return(
        <>
            <nav id='navbar' className="navbar navbar-expand-lg">
                    <div className="container-fluid" id='container'>
                        <div className='mobile-nav' id='mobile-view'>
                            <a className="navbar-brand d-lg-none" href="#">
                                <img src= {image} alt="logo" id="logo" width="144px" height="32px" />
                            </a>
                            <div className='btn-hold'>
                                <button type="button" className="btn" id='btna'><Link to='/register'>Signup</Link></button>
                                <button type="button" className="btn" id='btnb'><Link to='/login'>Login</Link></button>
                            </div>
                            
                        </div>

                        <div className="navbar-collapse justify-content-between ps-4 pe-4"  id="navbarTogglerDemo02">
                            <a className="navbar-brand d-none d-lg-block" href="#" id='log'>
                                <img src= {image} alt="logo" className="d-inline-block align-text-top" width="200px" height="50px" id='logo'/>
                            </a>
                            <ul className="navbar-nav gap-3" id='lit'>
                            <button type="button" className="btn" id='btn1'><Link to='/register'>Signup</Link></button>
                            <button type="button" className="btn" id='btn2'><Link to='/login'>Login</Link></button>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main className='main1'>
                    <div id='hero'>
                        {/* <img src= {fruitA} alt="cabbage" class="d-inline-block align-text-top" width="50px" height="50px" id='cabbage'/> */}
                        <h1 id='find'>find</h1>
                        <h1 id='find1'>my</h1>
                        <h1 id='sauce'>sauce</h1>
                        <img src= {pepper} alt="cabbage" width="50px" height="50px" id='pepper'/>
                        <img src= {fruitA} alt="cabbage" width="25px" height="25px" id='cabbage1'/>
                        <img src= {pepper} alt="cabbage" width="120px" height="144px" id='pepper1'/>
                    </div>
                    <div id='hold-sha'>
                        <p id='shalaye'>
                            Join the findmysauce community today and embark on a culinary journey like no other. With delicious recipes, top-notch ingredients, and expert tips at your fingertips, cooking has never been more enjoyable or hassle-free. Get ready to unleash your inner chef and savour every moment in the kitchen with findmysauce.
                        </p>
                    </div>
                    <div className='btn-hold1'>
                        <button type="button" className="btn" id='btn3'><Link to='/register'>Signup</Link></button>
                        <button type="button" className="btn" id='btn4'><Link to='/login'>Login</Link></button>
                    </div>

                    <div className='text-hold'>
                        <h4 className='health'>Healthy Recipes</h4>
                        <h5 className='with'>with features</h5>
                        <div className="img-hold">
                            <img src= {keto1} alt="cabbage" width="264px" height="273px" id='keto'/>
                            <img src= {keto2} alt="cabbage" width="264px" height="273px" id='keto'/>
                            <img src= {keto1} alt="cabbage" width="264px" height="273px" id='keto'/>
                        </div>
                    </div>
                    <div id='hold-sha'>
                        <p id='shalaye'>
                        Are you tired of the same old recipes and bland ingredients? Say goodbye to uninspired meals and hello to a world of flavor at findmysauce. 
                        </p>
                    </div>
                    <div className='footer'>
                        <h5 id='connect'>Connect with Us</h5>
                        <ul id='foot-li'>
                            <FaPhoneAlt className='phone' />
                            <li>09012543241</li>
                            <FaInstagram className='ig' />
                            <li>@findmysauceNg</li>
                            <FaXTwitter className='tweet' />
                            <li>@findmysauceNg</li>
                            <MdAttachEmail className='mail' />
                            <li>findmysauce@gmail.com</li>
                        </ul>
                        
                        <a className='top1' href='#navbar'>Back to the top</a>
                    </div>
                <br />
                </main>

                <main className='main2'>
                    <div id='hero'>
                        <h1 id='find2'>findmy<span id='sauce1'>Sauce</span></h1>
                        <img src= {pepper} alt="cabbage" width="100px" height="100px" loading='lazy' id='pepper3'/>
                        <img src= {fruitA} alt="cabbage" width="35px" height="35px" loading='lazy' id='cabbage3'/>
                        <img src= {fruitA} alt="cabbage" width="60px" height="60px" loading='lazy' id='cabbage4'/>
                        <img src= {pepper} alt="cabbage" width="300px" height="300px" loading='lazy' id='pepper4'/>
                    </div>
                    <div id='hold-sha1'>
                        <p id='shalaye1'>
                            Join the findmysauce community today and embark on a culinary journey like no other. With delicious recipes, top-notch ingredients, and expert tips at your fingertips, cooking has never been more enjoyable or hassle-free. Get ready to unleash your inner chef and savour every moment in the kitchen with findmysauce.
                        </p>
                    </div>
                    <div className='btn-hold2'>
                        <button type="button" className="btn" id='btn6'><Link to='/login'>Login</Link></button>
                        <button type="button" className="btn" id='btn5'><Link to='/register'>Signup</Link></button>
                    </div>

                    <div className='text-hold1'>
                        <h4 className='health1'>Healthy Recipes</h4>
                        <h5 className='with'>with features</h5>
                        <div className="img-hold1">
                            <img src= {keto1} alt="cabbage" width="264px" height="273px" loading='lazy' id='keto'/>
                            <img src= {keto2} alt="cabbage" width="264px" height="273px" loading='lazy' id='keto'/>
                            <img src= {keto1} alt="cabbage" width="264px" height="273px" loading='lazy' id='keto'/>
                        </div>
                    </div>
                    <div id='hold-sha1'>
                        <p id='shalaye1'>
                        Are you tired of the same old recipes and bland ingredients? Say goodbye to uninspired meals and hello to a world of flavor at findmysauce. 
                        </p>
                    </div>
                    <div className='footer'>
                        <h5 id='connect'>Connect with Us</h5>
                        <ul id='foot-li'>
                            <FaPhoneAlt className='phone' />
                            <li>09000000000</li>
                            <FaInstagram className='ig' />
                            <li>@findmysauceNg</li>
                            <FaXTwitter className='tweet' />
                            <li>@findmysauceNg</li>
                            <MdAttachEmail className='mail' />
                            <li>findmysauce@gmail.com</li>
                        </ul>
                        
                        <a className='top1' href='#'>Back to the top</a>
                    </div>
                <br />
                </main>
        </>
    )
}

export default Home;