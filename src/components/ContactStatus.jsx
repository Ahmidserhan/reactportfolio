import React from 'react';

const ContactStatus = ({ status }) => {
  if (!status) return null;

  return (
    <div className={`form-status ${status}`}>
      {status === 'success' ? 
        'Message sent successfully! I\'ll get back to you soon.' : 
        'Failed to send message. Please check your EmailJS template ID in config/emailjs.js or contact me directly at halonahmidserhan5@gmail.com'
      }
    </div>
  );
};

export default ContactStatus;
