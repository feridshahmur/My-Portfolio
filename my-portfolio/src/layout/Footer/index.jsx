import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';





const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>My Portfolio</h5>
                        <p>© 2023 My Portfolio. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <a href="#" className="text-white me-3">Privacy Policy</a>
                        <a href="#" className="text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;