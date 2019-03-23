import React, { Component } from 'react';
import Axios from 'axios';
import {API_URL } from '../config/constants'
import M from 'materialize-css'

import Preloader from '../components/Preloader'
import Nav from '../components/Nav'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading : false,
            firstName : "",
            lastName : "",
            email : "",
            address : "",
            phone : "",
            job : "",
            password : "",
            dateOfBirth: "",
         }
    }

    fNameChange = e => {
        this.setState({
            firstName : e.target.value
        })
    } 
    lNameChange = e => {
       this.setState({
           lastName : e.target.value
       })
   } 
   
   emailChange = e => {
       this.setState({
           email : e.target.value
       })
   } 

   addressChange = e => {
    this.setState({
        address : e.target.value
    })
} 

   phoneChange = e => {
       this.setState({
           phone : e.target.value
       })
   } 

   jobChange = e => {
       this.setState({
           job : e.target.value
       })
   } 

   passChange = e => {
       this.setState({
           password : e.target.value
       })
   } 
   dobChange = e => {
       this.setState({
           dateOfBirth : e.target.value
       })
   }
   
   submitForm(e){
    e.preventDefault();
    this.setState({
        loading : true
    })
    const { firstName, lastName, password, email, address, phone, job, dateOfBirth } = this.state
    Axios.post(`${API_URL}/auth/signup`, {
        firstName,
        lastName,
        email,
        address,
        password,
        phone,
        job,
        type : "user",
        dateOfBirth,

    })
    .then( res => {
        res = res.data
        console.log(res)
        
        if(res.error) M.toast({ html : `<span>${res.message}</span>`})
        else{
            sessionStorage.setItem('userData', JSON.stringify({ ...res.data, type: 'user' }))

            this.props.history.push('/reports')
        }
    })
    .catch( err => console.error(err))
    .finally( () => this.setState({ loading : false }))
}

    render() { 
        return ( 
            <div className="wrapper">
                <Nav {...this.props} />
                <Preloader loading={this.state.loading}/>
                 <div id="#user" className="">
                            <div className="form-all">
                                <div className="login valign-wrapper">
                                    <form className="valign shadowed" onSubmit={this.submitForm.bind(this)} >
                                        <h5>Register as a User</h5>
                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="firstName">First Name</label>
                                                <input id="firstName" type="text" onChange={this.fNameChange} ></input>	
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input id="lastName" type="text" className="validate" onChange={this.lNameChange}></input>
                                                
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="email" onChange={this.emailChange} ></input>	
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="address">Address</label>
                                                <input id="address" type="text" onChange={this.addressChange} ></input>	
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                                <input id="dateOfBirth" type="date" onChange={this.dobChange} ></input>	
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
                                                <label htmlFor="job">Job</label>
                                                <input id="job" type="text" onChange={this.jobChange} ></input>	
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="password">Password</label>
                                                <input id="password" type="password" onChange={this.passChange} ></input>	
                                            </div>
                                        </div>
                                        <button className="btn" type="submit" name="action" >Submit</button>

                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
         );
    }
}
 
export default User;
