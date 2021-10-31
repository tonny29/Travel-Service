import React from 'react';
import { Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome,faPhone,faMailBulk,faMapMarkerAlt,faTaxi,faQuestionCircle,faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-style row">
            {/* <p>Central Medical Hospital . centralhospita@gmail.com  uttara-1230</p> */}
            <Col lg={4}>
                <h4>{' '}CENTRAL HOSPITAL</h4>
                <p> {' '}House 01, Road 07 Jashim <br /> Uddin Over Bridge Open 24 hours</p>
                <p>{' '}02334455667 <br /> 028874646329 </p>
                <p>{' '}centralhospital@gmail.com</p>
            </Col>
            <Col lg={4}>
                <h4>{' '}AMBULANCE NUMBER</h4>
                <p>{' '}023748567120</p>
                <p>{' '}026773540089</p>
                <p>{' '}023247894577</p>
            </Col>
            <Col lg={4}>
                <h5>{' '}INFORMATION</h5>
                <p>{' '}About Us</p>
                <p>{' '}Our Other Hospital Address</p>
                <p>{' '}Our Services System</p>
            </Col>
        </div>
    );
};

export default Footer;

