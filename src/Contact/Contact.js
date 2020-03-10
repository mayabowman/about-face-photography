import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram } from 'react-icons/fa';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className='Contact'>
        <h2>Get In Touch</h2>
        <div className='contact-container'>
          {/* <div className='phone'>
            <FontAwesomeIcon
              icon={'phone'}
              className='phone-icon'
              size='2x'
            />
            <p>260.414.3152</p>
          </div> */}
          <div className='instagram'>
            <a href='https://www.instagram.com/samsmith_studio/'>
              <FaInstagram
                className='insta-icon'
                size={32}
              />
              <p>samsmith_studio</p>
            </a>
          </div>
          <div className='email'>
            <a href='mailto:sam3lpi@gmail.com'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='envelope'
              size='2x'
            />
            <p>sam3lpi@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;