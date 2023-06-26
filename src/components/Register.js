import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from '../css/Register.module.css';
import Alert from './AlertBox';
import { useOutletContext } from "react-router-dom";

export default function Register() {
  const [url] = useOutletContext();

  const [showAlert, setShowAlert] = useState(false);
  const [message,setMessage]=useState("Registration failed." );
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      setMessage("Enter valid data");
      setTimeout(() => {
        setShowAlert(true);
      }, 0);
  
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
      return false;
    }
  
    fetch(url+"/register", {
      method: 'POST',
      body: JSON.stringify({ email: email, name: names, password: password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Registration failed');
        }
        

          return response.json(); // Parse response as JSON
        
      })
      .then((data) => {
        // Access authorization parameter from the response
        localStorage.setItem('authToken', data.authorisation.token);
        // Continue with further logic using the authorization parameter
      })
      .catch((error) => {
        let errorMessage = error.message;

        // Check if the error is due to JSON parsing failure
        if ( error.message.includes('JSON')) {
          errorMessage = 'Email already taken please try again';
        } else {
          errorMessage = error.message;
        }
        // Registration failed, show failure alert

        setMessage(errorMessage)
        setTimeout(() => {
          setShowAlert(true);
        }, 0);
  
        setTimeout(() => {
          setShowAlert(false);
        }, 1500);
  
        // Handle the error
      });
  };
  


  const [email,setEmail]=useState("");
  const [names,setName]=useState("");
  const [password,setPassword]=useState("");

  const [emailCheck,setEmailCheck]=useState(false);
  const [namesCheck,setNameCheck]=useState(false);
  const [passwordCheck,setPasswordCheck]=useState(false);
  const getCheckIcon = (checkState) => {
    return checkState ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>;
  };
  
  
  const isFormValid = () => {
    return emailCheck && namesCheck && passwordCheck;
  };
  
  const isValidName = (variableName) => {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9 $]*$/; // Regex pattern for valid variable name
  
    if (typeof variableName === 'string' && variableName.length <= 255) {
      return regex.test(variableName);
    }
  
    return false;
  };
  const onChangeEmail=(events)=>{
    const { value } = events.target;
    setEmail(value);
    setEmailCheck((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))?true:false)
  }
  const onChangeName=(events)=>{
    setName(events.target.value);
    setNameCheck(isValidName(names))
  }
  const onChangePassword=(events)=>{
    setPassword(events.target.value);
    setPasswordCheck(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/.test(password));
  }

  return (
    <div>
      <div className={styles['mainblock']}>
        <h1>Registration</h1>
        <form action="/" onSubmit={handleSubmit}>
          <hr />

          <br />
          <label id="icon" htmlFor="name">
            <i className="fas fa-envelope"></i>
          </label>
          <input type="text" value={email} onChange={onChangeEmail} onInput={onChangeEmail} name="email" id="email" placeholder="Email" required />
          <span>{getCheckIcon(emailCheck)}</span> 
          <br />
          <label id="icon" htmlFor="name">
            <i className="fas fa-user"></i>
          </label>
          <input type="text" value={names} onChange={onChangeName} onInput={onChangeName} name="name" id="name" placeholder="Name" required />
          <span>{getCheckIcon(namesCheck)}</span>
          <br />
          <label id="icon" htmlFor="name">
            <i className="fas fa-unlock-alt"></i>
          </label>
          <input type="password" value={password} onChange={onChangePassword}  onInput={onChangePassword} name="password" id="password" placeholder="Password" required />
          <span>{getCheckIcon(passwordCheck)}</span>
          <div className={styles['btn-block']}>

          <button type="submit" disabled={!isFormValid()}>Submit</button>
        </div>
        </form>
        <div className={styles["alertsB"]}>

      <Alert message={message} showAlert={showAlert} />
        </div>
      </div>

      

    </div>
  );
}
