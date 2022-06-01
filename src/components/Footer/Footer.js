import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_container">
                <img src="https://see.fontimg.com/api/renderfont4/5Y58/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzE4MDIwMiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/Q3JlYXRpbmcgYnkgTWFyeWFuY2h1aw/vegan-style-personal-use.png" alt="Create by Maks Maryanchuk"/>
                <div className="footer_socials">
                    <a href="https://www.instagram.com/_maryanchukm_/" target="_blank"><i className="fab fa-instagram-square"></i></a>
                    <a href="https://www.facebook.com/ffrgd.ewexa" target="_blank"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://github.com/maryanchuk04" target="_blank"><i className="fab fa-github-square"></i></a>
                    <a href="https://www.reddit.com/user/Maryanchuk_04" target="_blank"><i className="fab fa-reddit-square"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;