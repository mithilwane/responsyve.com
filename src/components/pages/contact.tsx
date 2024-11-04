// src/pages/Home.tsx
import React, { useRef, useState } from 'react';
import Navigation from '../../navigation';
import './common.css';
import { Button, Card, Form } from 'react-bootstrap';
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const setField = (field:any, value:any) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const serviceId = "service_rp4jlh6";
    const templateId = "template_4wxahse";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: form.name,
       email: form.email,
       message: form.message,
       phone: form.phone
      });
      console.log(form);      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navigation/>
      <div className='base-page'>
      <div className='d-flex align-items-center justify-content-center vh-75'>    
      <Card className="text-center">
      <Card.Header>Contact Us</Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="input" placeholder="John Smith" onChange={ e => setField('name', e.target.value) }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={ e => setField('email', e.target.value) }/>
      </Form.Group>  
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="input" placeholder="(CountryCode)-(Phone Number)" onChange={ e => setField('phone', e.target.value) }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
        <Form.Label>Query</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={ e => setField('message', e.target.value) }/>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>Submit</Button>
    </Form>        
      </Card.Body>
    </Card>
    </div>
      </div>
    </div>
  );
};

export default Contact;