import React, { useState } from 'react';
import './Contact.css';
import instagramIcon from '../assets/Instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import whatsappIcon from '../assets/whatsapp.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData(e.target);
    formDataObj.append("access_key", "90dd4f01-3879-4cb3-8432-9a71a17b800a"); // Replace with your actual access key

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form fields
      } else {
        setResponseMessage('Failed to send message.');
      }

      setTimeout(() => {
        setResponseMessage(''); // Clear the message after 5 seconds
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('Failed to send message.');
      setTimeout(() => {
        setResponseMessage(''); // Clear the message after 5 seconds
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-contact">
        <h1 className="contact-title">Contact Me</h1>
        {responseMessage && <p className={`response-message ${responseMessage.includes('successfully') ? 'success' : 'error'}`}>{responseMessage}</p>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div className="social-icons">
          <a href="https://www.instagram.com/akashmane907/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/akash-mane-bb98a21b7/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://wa.me/7400387427" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
