import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); // Track submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
    const form = useRef();

    const handleSubmit = (e) => {
      emailjs.sendForm('service_vcbps4f', 'template_4ontxp8', form.current, 'IzJ6A9SOhGMLbCMn8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
    
  

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="project-heading">
              Contact <strong className="purple">Me</strong>
            </h2>
          </Col>
        </Row>
        <br />

       <Row>
     
          <Col md={6} className="mx-auto cnt" style={{height:"100%"}}>
            {submissionStatus === "success" && (
              <Alert variant="success">Message sent successfully!</Alert>
            )}
            {submissionStatus === "error" && (
              <Alert variant="danger">Message sending failed. Please try again.</Alert>
            )}
            
            
             
         
            <Form
            ref={form}
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="name">
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input" // Apply the form-input class
                />
              </Form.Group> 
      
              <Form.Group controlId="email">

                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="form-input" // Apply the form-input class
                />
              </Form.Group> 
        
              <Form.Group controlId="message">

                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="form-input" // Apply the form-input class
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="submit-button">
                Send Message
              </Button>
            </Form>
          </Col>
          
          </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
