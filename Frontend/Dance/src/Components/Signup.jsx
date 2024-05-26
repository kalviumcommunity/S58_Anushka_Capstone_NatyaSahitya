import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

  const [field, setField] = useState({
    username: "",
    password: "",
    Email: "",
    phoneno: ""
  });

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    console.log(field);

    
    if (
      field.username !== "" &&
      field.Email !== "" &&
      field.password !== "" &&
      field.phoneno !== "" &&
      field.password.length >= 5 &&
      field.password.includes("@") &&
      field.phoneno.length === 10 &&
      field.Email.includes("@")
    ) {
      setValidate(true);
      
    } 
    axios.post('http://localhost:8080/SignUp', field)
    .then((res)=>{
      console.log(res)
      navigate("/")
    })
    .catch(error=>{
      console.log("error:",error)
    })
  };

  return (
    <>
      <div className='sign-boxes'>
        <div className='box1'>
          <div className='create-acc'>
            <form onSubmit={handleSubmit}>
              <div>
                {validate && <h3>Registration Successful !!</h3>}
              </div>
              <div className='section1'>
                <h2>Create your account</h2>
              </div>
              <div className='section2'>
                <input
                  value={field.username} type="text" placeholder='Enter Username' onChange={(e) => setField({ ...field, username: e.target.value })}
                />
                {submitted && field.username === "" && <p>Enter your Username.</p>}

                <input
                  value={field.password} type="password" placeholder='Enter Password' onChange={(e) => setField({ ...field, password: e.target.value })}
                />
                {submitted && field.password === "" && <p>Enter your Password.</p>}
                {submitted && field.password.length < 5 && field.password !== "" && <p>Password should be at least 5 characters long.</p>}
                {submitted && !field.password.includes("@") && field.password !== "" && <p>Password should include "@".</p>}

                <input
                  value={field.Email} type="text" placeholder='Enter E-mail' onChange={(e) => setField({ ...field, Email: e.target.value })}
                />
                {submitted && field.Email === "" && <p>Enter your E-mail.</p>}
                {submitted && !field.Email.includes("@") && field.Email !== "" && <p>Enter a valid E-mail.</p>}

                <input
                  value={field.phoneno} type="text" placeholder='Enter Phone number' onChange={(e) => setField({ ...field, phoneno: e.target.value })}
                />
                {submitted && field.phoneno === "" && <p>Enter your Phone number.</p>}
                {submitted && field.phoneno.length !== 10 && field.phoneno !== "" && <p>Enter a valid 10-digit Phone number.</p>}
              </div>
              <div className='submit-btn'>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className='box2'>
          
        </div>
      </div>
    </>
  );
};

export default Signup;
