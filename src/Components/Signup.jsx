import React, { useContext } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Signup = () => {
      const { create_user } = useContext(AuthContext);

      const handle_submit = (event) => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const confirm = form.confirm.value;
            const register = { name, email, password, confirm };
            console.log(register);

            create_user(email, password)
                  .then((result) => {
                        console.log(result.user);
                        form.reset();
                  })
                  .catch((error) => {
                        console.log('ERROR', error);
                  });
       };

      return (
            <div className='flex flex-col justify-center items-center min-h-screen'>
                  <form onSubmit={handle_submit} className="form">
                        <p className="title">Register</p>
                        <p className="message">Signup now and get full access to our app.</p>
                        
                        <label>
                              <input className="input" type="text" name="name" required />
                              <span>Firstname</span>
                        </label>

                        <label>
                              <input className="input" type="email" name="email" required />
                              <span>Email</span>
                        </label>

                        <label>
                              <input className="input" type="password" name="password" required />
                              <span>Password</span>
                        </label>

                        <label>
                              <input className="input" type="password" name="confirm" required />
                              <span>Confirm password</span>
                        </label>

                        <button className="submit">Submit</button>
                        <p className="signin">Already have an account? <Link to="/login">Signin</Link></p>
                  </form>
            </div>
      );
};

export default Signup;
