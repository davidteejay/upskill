import React, { Component } from 'react';
import Axios from 'axios';
import {API_URL } from '../config/constants'
import M from 'materialize-css'

class Ngo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : "",
            address : "",
            email : "",
            phone : "",
            password : "",
         }
    }

    nameChange = e => {
        this.setState({
            name : e.target.value
        })
    } 
    addressChange = e => {
       this.setState({
           address : e.target.value
       })
   } 
   
   emailChange = e => {
       this.setState({
           email : e.target.value
       })
   } 

   phoneChange = e => {
       this.setState({
           phone : e.target.value
       })
   } 

   passChange = e => {
       this.setState({
           password : e.target.value
       })
   } 
   
   submitForm = () =>{
    const { name, address, password, email, phone, } = this.state
    Axios.post(`${API_URL}/auth/signup/`, {
        name,
        address,
        email,
        password,
        phone,
        type : "ngo",

    })
    .then( res => {
        res = res.data
        console.log(res)
        if(res.error) M.toast({ html : `${res.message}`})
        else{

        }
    })
    .catch( err => console.error(err))
    .finally({
        
    })
}

    render() { 
        return ( 
            <div>
                 <div id="#user" className="">
                            <div className="form-all">
                                <div className="form-card">
                                    <form className="valign shadowed" onSubmit={this.submitForm} >
                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="firstName">Name</label>
                                                <input id="Name" type="text" onChange={this.nameChange} ></input>	
                                            </div>
                                        </div>

                                            <br />

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="Address">Address</label>
                                                <input id="address" type="text" className="validate" onChange={this.lNameChange}></input>
                                                
                                            </div>
                                        </div>

                                        <br />

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="email" onChange={this.emailChange} ></input>	
                                            </div>
                                        </div>

                                        
                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="phone">Phone</label>
                                                <input id="phone" type="text" onChange={this.phoneChange} ></input>	
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="password">Password</label>
                                                <input id="password" type="password" onChange={this.passChange} ></input>	
                                            </div>
                                        </div>
                                        <button className="btn waves-effect waves-light" type="submit" name="action" >Submit</button>

                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
         );
    }
}
 
export default Ngo;