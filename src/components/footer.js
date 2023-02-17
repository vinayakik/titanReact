import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className="foot-container">
        <div className="foot-content">
          <h5>CUSTOMER SERVICE</h5>
          <ul>
            <li><a href="#">Payment options</a> </li>
            <li><a href="#"> Track order</a></li>
            <li><a href="#">Encircle Program</a></li>
          </ul>
        </div>
        <div className="foot-content">
          <h5>CONTACT US</h5>
          <ul>
            <li className="contact-info">1800-266-0123</li>
            <li className="contact-info">customercare@titan.co.in</li>
            <li><a href="#">FAQ</a> </li>
          </ul>
        </div>

        <div className="foot-content">
          <h5>POLICIES</h5>
          <ul>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Delivery Information</a></li>
          </ul>
        </div>

        <div className="foot-content">
          <h5>ABOUT TITAN</h5>
          <ul>
            <li><a href="#">Corporate</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </footer>
      <div className="foot-final">
        <p className="text-center">Made with <i style={{color:"red", fontSize:"large"}}>&hearts;</i> by Vinayak </p>
        <p className="text-center copy-right">Copyright &copy 2022 vinayakkadlennavar@gmail.com</p>
      </div>
    </>
  )
}

export default Footer;