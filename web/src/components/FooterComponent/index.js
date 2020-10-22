import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

import { Container } from '../../styles';
import { Footer } from './styled';

function FooterComponent() {
  return (
    <Footer>
      <Container id="sectionOne">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="new in">New in</Link>
          </li>
          <li>
            <Link to="computers">Computers</Link>
          </li>
          <li>
            <Link to="chairs">Chairs</Link>
          </li>
          <li>
            <Link to="shirts">Shirts</Link>
          </li>
        </ul>

        <span>+55 13 98835 0353</span>
      </Container>

      <hr />

      <Container id="sectionTwo">
        <p>
          Dedicated to providing high quality products and resources for
          developers and web designers.
        </p>

        <ul>
          <li>
            <FaFacebookF className="fb" />
          </li>
          <li>
            <FaGithub className="gh" />
          </li>
          <li>
            <TiSocialInstagram className="ig" />
          </li>
          <li>
            <FaLinkedin className="ld" />
          </li>
        </ul>
      </Container>
    </Footer>
  );
}

export default FooterComponent;
