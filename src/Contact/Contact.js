import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from 'react-icons/fa';
import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className='Contact'>
        <h2>Get In Touch</h2>
        <div className='contact-container'>
          <div className='phone'>
            <FontAwesomeIcon
              icon={'phone'}
              className='phone-icon'
              size='2x'
            />
            <p>260.414.3152</p>
          </div>
          <a
            href='www.instagram.com/samsmith_studio/'
            className='instagram'
          >
            <div>
              <FaInstagram
                className='insta-icon'
                size={32}
              />
              <p>samsmith_studio</p>
            </div>
          </a>
          <div className='email'>
            <FontAwesomeIcon
              icon={'envelope'}
              className='envelope'
              size='2x'
            />
            <p>sam3lpi@gmail.com</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;