import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginCredentials } from '../actions';
import CountryDetails  from '../countryList/countryList.js';
import logo from '../logo.svg';
import '../App.css';
import '../css/bootstrap.min.css';
import '../css/loginPage.css';
import { toast } from 'react-toastify';
import '../css/ReactToastify.min.css';

  function checkLoginCredentials(props, userName, password) {
    console.log("User Name", props.credentials);
    if(props.credentials.username === userName && props.credentials.password === password) {
      return true
    }
    else {
      toast.info("Your Login Credentials are worong");
      return false
    }
  }
  function LoginPage(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showEmployee, setShowEmployee] = useState(false);
    return(
      (showEmployee) ? <CountryDetails /> :
      <div className="container logincontainer">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required onChange={(event) => { setUserName(event.target.value); }}/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required onChange={(event) => { setPassword(event.target.value); }} />

        <button type="submit" onClick={(event)=> {(checkLoginCredentials(props, userName, password)) ? setShowEmployee(true) : setShowEmployee(false) }}>Login</button>
      </div>
    )
  
}

const mapStateToProps = ({ logindetails }) => {
  const { credentials } = logindetails;
	return { credentials };
};

export default connect(mapStateToProps, { loginCredentials } )(LoginPage);

