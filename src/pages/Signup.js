import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Nav from '../components/Nav';

import '../assets/css/style2.css';

class Signup extends Component {    
    render() { 
        return (
            <div className="wrapper">
                <Nav transparent/>
                <div className="signup-container valign-wrapper">
                    <div className="signup valign">
                        <h2 className="reg center light"> Register as</h2>
                        <div class="center">
                            <Link to="/signup/user" className="btn-large bttn z-depth-0">A User</Link>
                            <Link to="/signup/ngo" className="btn-large bttn z-depth-0">An NGO</Link>
                        </div>
                    </div>
                 </div>
             </div>
        );
    }
}

export default Signup;
