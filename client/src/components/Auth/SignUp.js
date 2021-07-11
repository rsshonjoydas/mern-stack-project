import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './Login.module.css';

const SignUp = () => (
  <div className={styles.pagesBody}>
    <form className={styles.loginBox}>
      <h3>Login</h3>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="email" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <input type="submit" name="" />
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

export default SignUp;
