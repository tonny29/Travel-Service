import React from 'react';
import { Col } from 'react-bootstrap';
import './About.css';

const About = () => {
 
    return (
        <div className="about-page">
           <div>
               <h1>ABOUT US</h1>
               <div className="about-text">
                   <p>We arrange travel for end our clients (individuals, groups, corporations) on behalf of suppliers (hotels, airlines, car rentals, cruise lines, railways, travel insurance, package tours). Our task is to simplify the travel planning process for our customers in addition to providing consultation services and entire travel packages.An Agent can be self-employed, work for an independent travel agency, or be part of a Travel Agency Consortia. Travel agents may specialize in leisure, business and/ or other niche travel markets. They may be generalists or specialists (i.e. specialise in cruises, adventure travel, conventions and meetings.). The agents typically receive a 10 to 15% commission from accommodations, transportation companies and attractions for coordinating the booking of travel.Although booking a hotel/ a trip etc. through a Travel Agent saves time, nowadays the number of Travel Agencies is decreasing due to the strong online presence of the suppliers (hotels, airlines…) themselves. OTAs are the (new) online form of a Travel Agency.Using a Travel Agent is beneficial for customers who plan multi-destination and/ or international trips. booking through an agent saves time and ‘headaches’. The experience and consultancy comes from ‘one hand’ – the agent who combines all the travel components and services for the client/ traveler. Often agents also dispose of unpublished deals and activities which is beneficial for the traveler.</p>
               </div>
            </div>
            <hr />
           <div>
               <h1>WHY CHOOSE US</h1>
               <div className="row about-text">
                   <Col lg={4}>
                       <h5>Booking System</h5>
                       <li>We arrang flights</li>
                       <li>We have hotel booking system</li>
                       <li>We have transport booking System</li>
                   </Col>
                   <Col lg={4}>
                       <h5>Customer Services</h5>
                       <li>We have Kids related bookings and management (arranging nannies in hotels)</li>
                       <li>We deal with complaints or refunds</li>
                       <li>We collect and process payments</li>
                   </Col>
                   <Col lg={4}>
                       <h5>Events Arrangment</h5>
                       <li>We organize events, conferences etc</li>
                       <li>We ensure participation of customer</li>
                       <li>We arranged a gift voucher all of customers</li>
                   </Col>
               </div>
            </div>
            <hr />
           <div>
               <h1>OUR MISSION</h1>
               <div className="about-text">
                   <li>To provide a warm, professional, and knowledgeable service to all clients, as well as to potential clientele.</li>
                   <li>We stand to offer an environmentally and socially conscious approach to tourism, hoping that in the future we help to create a comfortable relationship between the people of Chile and the passionate traveler.</li>
                   <li>To have an ongoing aim to make our client’s lives a little happier through an encounter with Latin American Culture. We work hard with our clients because we enjoy working with their dreams of visiting South America…and soon bringing them to life.</li>
                   <li>Clients are our friends. It is our mission to bring forth a high quality of personality and trust, in turn creating an everlasting memory of Chile. We help guide the traveler as a friend would guide a friend. </li>
               </div>
            </div>
        </div>
    );
};

export default About;