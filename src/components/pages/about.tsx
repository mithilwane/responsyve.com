// src/pages/Home.tsx
import React from 'react';
import Navigation from '../../navigation';
import './common.css';
import { Card } from 'react-bootstrap';
import resImg from '../../assets/ResponsiveImg.svg';

const About: React.FC = () => {
  return (
    <div>
      <Navigation/>
      <div className='base-page'>
      <div className='d-flex align-items-center justify-content-center vh-75'>  
        <Card>
        <Card.Img variant="top" src={resImg} />
          <Card.Body>
            <Card.Title>
              Adapt To Change
            </Card.Title>
            <Card.Text>              
              At Responsyve, We provide services to help our customers to 
              adapt to the change whether it be in terms of business or in 
              terms of Applications. We help build Responsive applications 
              from the word go.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </div>
    </div>
  );
};

export default About;