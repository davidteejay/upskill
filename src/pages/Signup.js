import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Nav from '../components/Nav';

import '../assets/css/style2.css';

class Signup extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
       

    }
    render() { 
        return (
             <div>
                 <Nav />

                 <h4 className="reg"> Register as User or NGO</h4>

                 <div className="signup">
                
                    <Link to="/signup/user" class="waves-effect waves-light btn-large bttn">User</Link>
                    <Link to="/signup/ngo" class="waves-effect waves-light btn-large bttn">NGO</Link>
                 </div>
             </div>
        );
    }
}

export default Signup;