// src/pages/Home.tsx
import React from 'react';
import Navigation from '../../navigation';
import './common.css';
import { Carousel } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div>
      <Navigation/>
      <div className='base-page'>
        <div>  
          <Carousel>
          <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/AppDev.svg'}
              height='600px'
              width='600px'
              className="d-block w-100"
              alt="App Development" />
            <Carousel.Caption>
              <h3 className='text-color-black'>Mobile App Development</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/WebDev.svg'}
              height='600px'
              width='600px'
              className="d-block w-100"
              alt="Web Development"/>
            <Carousel.Caption>
              <h3  className='text-color-black'>Web App Development</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/CloudDev.svg'}
              height='600px'
              width='600px'
              className="d-block w-100"
              alt="Cloud Solutions" />
            <Carousel.Caption>
              <h3 className='text-color-black'>Cloud - Consulting and Solutions</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/IotDev.svg'}
              height='600px'
              width='600px'
              className="d-block w-100"
              alt="IoT Solutions" />
            <Carousel.Caption>
              <h3 className='text-color-black'>IOT - Consulting and Solutions</h3>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;