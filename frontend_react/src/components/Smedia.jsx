import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
      <div>
        <BsTwitter />
        <p> @cehennemden </p>
      </div>
      <div>
        <FaFacebookF />
        Dcebeci 
      </div>
      <div>
        <BsInstagram />
        d_cebeci
      </div>
    </div>
  );
  
  export default SocialMedia;
  