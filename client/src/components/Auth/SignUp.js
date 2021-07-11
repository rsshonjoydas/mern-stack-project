/* eslint-disable no-alert */
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import styles from './Login.module.css';

const SignUp = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cPassword: '',
  });

  let userName;
  let value;
  const handleInput = (e) => {
    userName = e.target.name;
    value = e.target.value;

    setUser({ ...user, [userName]: value });
  };

  const postSignUp = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cPassword } = user;

    const res = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cPassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      alert('failed');
      console.log('failed');
    } else {
      alert('success');
      console.log('success');

      history.push('/login');
    }
  };

  return (
    <div className={styles.pagesBody}>
      <form method="POST" className={styles.loginBox}>
        <h3>Signup</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleInput}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={user.email}
          onChange={handleInput}
          required
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={user.phone}
          onChange={handleInput}
          required
        />
        <input
          type="text"
          name="work"
          placeholder="Work"
          value={user.work}
          onChange={handleInput}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInput}
          required
        />
        <input
          type="password"
          name="cPassword"
          placeholder="Confirm Password"
          value={user.cPassword}
          onChange={handleInput}
          required
        />
        <input type="submit" name="" onClick={postSignUp} />
        <p className={styles.socialText}>Or Sign up with social platforms</p>
        <div className={styles.socialMedia}>
          <button type="button" className={styles.socialIcon}>
            <i className="fab fa-google" />
          </button>
          <button type="button" className={styles.socialIcon}>
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className={styles.socialIcon}>
            <i className="fab fa-twitter" />
          </button>
          <button type="button" className={styles.socialIcon}>
            <i className="fab fa-linkedin-in" />
          </button>
        </div>
        <div className={styles.link}>
          <a href="{#}">Forgot password?</a> or
          <Router>
            <Link to="/signup"> Sign Up</Link>
          </Router>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
