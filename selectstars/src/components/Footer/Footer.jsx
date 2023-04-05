import React from "react";
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-container">

            <div className="social-icons">

                <a href="https://twitter.com/shecodesaus?lang=en" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/3256/3256013.png" alt="twitter" />
                </a>
                
                <a href="https://www.instagram.com/shecodesaus/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="instagram" />
                </a>

                <a href="https://www.linkedin.com/company/shecodesaustralia/?originalSubdomain=au" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="linkedin" />
                </a>

            </div>
            <div className="copyright">
            {`Copyright © She Codes ${year}`}
            </div>
        </footer>
    );
};

export default Footer;