/* eslint-disable no-alert */
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      alert('Invalid Authentication');
    } else {
      alert('Login Successfully');
      history.push('/');
    }
  };

  return (
    <div className={styles.pagesBody}>
      <form method="POST" className={styles.loginBox}>
        <h3>Login</h3>
        <input
          type="text"
          name="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" name="" onClick={loginUser} />
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
export default Login;
