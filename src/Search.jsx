import './Search.css';
import React, { useState } from 'react';
import image from "./assets/findmysauce.svg"
import { IoSearch } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx"
import {useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';



function Search()
{
        const [input, setInput] = useState("");
        const [showModal, setShowModal] = useState(false);
        let [searchResults, setSearchResults] = useState([]);
        
        if(input === "")
        {
            searchResults = "";
        }

        const navigate = useNavigate();

        const fetchData = (value) => 
        {
            fetch(`https://api.api-ninjas.com/v1/recipe?query=${input}`, 
            {
                headers: 
                {
                    'X-Api-Key': 'IO4w8rsajVOh5fmI3uQolQ==TWceiTChW8z9wFW4'
                }
            })
            .then((res) => res.json())
            .then(json => 
            {
                setSearchResults(json);
            });
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            fetchData(input);
        };

        const handleChange = (value) =>
        {
            setInput(value);
        }

        const [isMenuVisible, setMenuVisible] = useState(false);
        const toggleMenu = () => {
            setMenuVisible(!isMenuVisible);
        };
        
        const handleLogoutClick = () => {
            setShowModal(true);
        };
    
        const handleCloseModal = () => {
            setShowModal(false);
        };
    
        const handleConfirmLogout = () => {
            setShowModal(false);
            navigate('/');
        };

        const handleReload = () => {
            searchResults = "";
            navigate('/search', { replace: true });
        };


        return (
            <>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid" id='container'>
                        <div class='mobile-nav' id='mobile-view'>
                            <a class="navbar-brand d-lg-none" href="#">
                                <img src= {image} alt="logo" id="logo" width="150px" height="50px" />
                            </a>
                            <button class="navbar-toggler custom-toggler" type="button" onClick={toggleMenu} aria-controls="navbarTogglerDemo02" aria-expanded={isMenuVisible} aria-label="Toggle navigation" id='ham-btn'>
                                <RxHamburgerMenu className='ham-btn'/>
                            </button>
                        </div>

                        <div class="navbar-collapse justify-content-between ps-4 pe-4"  id="navbarTogglerDemo02">
                            <a class="navbar-brand d-none d-lg-block" href="#" id='log'>
                                <img src= {image} alt="logo" class="d-inline-block align-text-top" width="200px" height="50px" id='logo'/>
                            </a>
                            <ul class="navbar-nav" id='lit'>
                                <li class="nav-item">
                                    <a class="nav-link Active" aria-current="page" href="#" onClick={handleReload}><IoIosHome className='home' /></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" onClick={handleLogoutClick}><IoLogOutSharp className='home' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>  

                <ul class="d-none" className={`mobile-menu ${isMenuVisible ? 'show' : ''}`}>
                            <li className="nav-item">
                                <a className="nav-link Active" aria-current="page" href="#" onClick={handleReload}><IoIosHome className='home' /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={handleLogoutClick}><IoLogOutSharp className='home' /></a>
                            </li>
                        </ul>


                <Modal show={showModal} onHide={handleCloseModal} className='mode'>
                    <Modal.Header closeButton>
                    <Modal.Title>Confirm Logout</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to logout?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleConfirmLogout}>
                        Logout
                    </Button>
                    </Modal.Footer>
                </Modal>


                <main>
                    <br />
                        <form class="d-flex justify-content-center align-items-center" onSubmit={handleSubmit} id='gate'>
                            <input class="form" type="search" value={input} onChange={(e) => handleChange(e.target.value)} placeholder="Search for meal e.g rice" aria-label="Search" />
                            <button class="btn custom-toggler" type="submit" id='btn-1'><IoSearch className='search'/></button>
                        </form>
                        {input && <h5 className='result'>Search for {input}: </h5>}
                    {searchResults.length > 0 ? (
                        <div class="card" className="search-results">
                            {searchResults.map((result, index) => (
                            <div class="card-body" key={index} className="search-result">
                                <h3 class="card-title" className='result-title'>{result.title}</h3>
                                <h5>Instructions:</h5><p className='instructions'>{result.instructions}</p>
                            </div>
                            ))}
                        </div>
                        ) : ( input && <p className='no-result'>No search results to display.</p>)}
                </main>
            </>
        );
    }



    export default Search;