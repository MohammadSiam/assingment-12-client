import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className=" footer">
            <div className="container links">
                <div>
                    <p>Usefull Links</p>
                    <p>Privacy Statement <br />Tax stategy <br /> Modern slavery statement <br /> Gender pay gap <br />Cookie policy </p>
                </div>
                <div>
                    <p>Perrys group </p>
                    <p>New Cars <br />New Car Offers <br />UpComming Car <br />Up Comming Car Offers </p>
                </div>
            </div>
            <hr />
            <div className="container copyright">
                <p>Copyright &copy; 2020 The Golden Roast.</p>
            </div>

        </div>
    );
};

export default Footer;