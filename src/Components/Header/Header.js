import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row,Navbar, Nav } from 'react-bootstrap';
import HeaderArea from '../HeaderArea/HeaderArea';
import './Header.css';

const Header = () => {
    const [place,setPlace]=useState([]);
    useEffect(()=>{
        fetch('https://howling-citadel-32119.herokuapp.com/tour')
        .then(res=>res.json())
        .then(data=>setPlace(data))
    },[])
    console.log(place);
    return (
        <div className="margin-add">
            <div className="row heading-style">
                    <Col lg={2}></Col>
                    <Col lg={10}>
                    <h1>TRUST OUR TRAVEL EXPERIENCE</h1>
                    <p>ENJOY THE BEST DESTINATION WITH YOUR TRAVEL AGENCY</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quae? Veniam doloribus porro nihil itaque officiis aliquam minima laborum cumque? <br /> Modi aut dignissimos dolores iste quibusdam aliquam delectus sapiente saepe! A distinctio <br /> temporibus commodi perspiciatis quae, tempora facilis delectus voluptatem autem quas necessitatibus, totam officia eum sapiente sunt quidem dolores.</small><br /> 
                    <button>See More</button>
                    </Col>
                
           </div>
            <div className="header-style row">
               <Col lg={6}>
                    <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2015%2F11%2Fbeautiful-places-world-1200x900.jpg" alt="" />
               </Col>
                <Col lg={6}>
                <div className="middle-style">
                 <h2>Discover New Horizons</h2><br />
                    <Navbar>  
                        
                        <Nav className="navigation">
                            <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
                            <Nav.Link as={Link} to="/about">WHY CHOOSE US</Nav.Link>
                            <Nav.Link as={Link} to="/about">OUR MISSION</Nav.Link>
                        </Nav>
                       
                    </Navbar>
                </div>
                    <p>Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you.Tour guides are a massive part of anyone’s trip. They can either make or break a tour. But don’t worry, Travel Talk’s tour guides are not only passionate about the destinations but are mostly born and raised there meaning they’re locals! This is a massive bonus for you as you receive expert information and doors will be opened for you that are closed to the everyday tourist. This is what we mean by getting the real experience.</p>
                </Col>
           </div>
            <div className="container">
             <h1>EXPLORE THE WORLD</h1>
             <p style={{color:"salmon"}}>Travel is the only thing you buy that makes you richer</p>
                <Row xs={1} md={3} className="card-style">
                    {
                      place.map(places=><HeaderArea placeAre={places}></HeaderArea>)  
                    }
                    <div className="see-more">
                    <Nav.Link as={Link} to="/about">See More ...</Nav.Link>
                    <Nav.Link as={Link} to="/addcountry"><button className="btn-style">Add Coutry For Tour</button></Nav.Link> 
                    
                    </div>
                    
                        
                   
                </Row>              
           </div>
           <div className="gift-side row">
               
               <Col lg={5}>
                   <div className="gift-text">
                       <h1>!!GIFT ***!!!*** GIFT!! </h1>
                   <h2>IT'S A CELEBRATION MOTNH!</h2>
                   <hr />
                   <h5>LOOKING FOR THE PERFECT GIFT?</h5>
                   <img src="https://www.hybridmlm.io/themes/hybrid/images/plans/give-share.jpg" alt="" />
                   </div>
               </Col>
               <Col lg={7}>
                  <div className="gift-text">
                      
                  <h3>AED 250 GIFT VOUCHER</h3>
                  <hr />
                   <h2>
                       GIVE YOU LOVED ONE'S THE BEXT <br /> GIFT OF ALL HOLIDAYS TOUR
                   </h2> 
                   
                   <hr />                 
                   <img src="https://www.picnicwale.com/special-offers/assets/images/family-tour-packages.jpg" alt="" />
                   </div>
               </Col>
           </div>
          
        </div>
    );
};

export default Header;