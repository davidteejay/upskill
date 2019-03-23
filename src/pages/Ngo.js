import React, { Component } from 'react';
import Axios from 'axios';
import {API_URL } from '../config/constants'
import M from 'materialize-css'

import Nav from '../components/Nav'
import Preloader from '../components/Preloader'


class Ngo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : "",
            address : "",
            email : "",
            phone : "",
            password : "",
            loading: false
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
   
   submitForm(e){
       e.preventDefault()
       this.setState({ loading: true })
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
            sessionStorage.setItem('userData', JSON.stringify({ ...res.data, type: 'ngo' }))

            this.props.history.push('/reports')
        }
    })
    .catch( err => console.error(err))
    .finally(() => this.setState({ loading: false }))
}

    render() { 
        return ( 
            <div className="wrapper">
                <Nav { ...this.props }/>
                <Preloader loading={this.state.loading} />
                 <div className="">
                            <div className="form-all">
                                <div className="login valign-wrapper">
                                    <form className="valign shadowed" onSubmit={this.submitForm.bind(this)} >
                                        <h4>Register as an NGO </h4>
                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="name">Name</label>
                                                <input id="Name" type="text" onChange={this.nameChange} ></input>	
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="Address">Address</label>
                                                <input id="address" type="text" className="validate" onChange={this.addressChange}></input>
                                                
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="email">Contact Email</label>
                                                <input id="email" type="email" onChange={this.emailChange} ></input>	
                                            </div>
                                        </div>

                                        
                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="phone">Contact Phone</label>
                                                <input id="phone" type="text" onChange={this.phoneChange} ></input>	
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className=" col s12 input-container">
                                                <label htmlFor="password">Password</label>
                                                <input id="password" type="password" onChange={this.passChange} ></input>	
                                            </div>
                                        </div>
                                        <button className="btn z-depth-0"  type="submit" name="action" >Submit</button>

                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
         );
    }
}
 
export default Ngo;
