import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './HeaderArea.css';

const HeaderArea = (props) => {
    const {image,name,cost,description,_id}=props.placeAre;
    return (
        <div>
            <Col className="mb-4">
              <Card className="card-img">
              <div className="stop">
              <Card.Img variant="top" src={image}/>
              </div>
              <Card.Body>
              <Card.Title>Name Of Country : {name}</Card.Title>
              <p>{description}</p>
              <h4>Cost : ${cost}</h4>
              <Link to={`/service/${_id}`}
              href='/service'
              ><button className="btn-style">Book This Tour</button></Link>
              </Card.Body>
              </Card>
              
          </Col>  
        </div>
    );
};

export default HeaderArea;