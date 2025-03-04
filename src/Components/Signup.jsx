import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
      const handle_submit = (event) => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const cofirm = form.confirm.value;
            const register = {name, email, password, cofirm};
            console.log(register);
       }
      return (
            <div className='flex flex-col justify-center items-center min-h-screen'>
                  <form onSubmit={handle_submit} class="form">
                        <p class="title">Register </p>
                        <p class="message">Signup now and get full access to our app. </p>
                              <label>
                                    <input class="input" type="text" placeholder="" name='name' required=""/>
                                          <span>Firstname</span>
                              </label>

                        <label>
                              <input class="input" type="email" placeholder="" name='email' required=""/>
                                    <span>Email</span>
                        </label>

                        <label>
                              <input class="input" type="password" placeholder="" name='password' required=""/>
                                    <span>Password</span>
                        </label>
                        <label>
                              <input class="input" type="password" placeholder="" name='confirm' required=""/>
                                    <span>Confirm password</span>
                        </label>
                        <button class="submit">Submit</button>
                        <p class="signin">Already have an acount ? <Link to={'/login'}>Signin</Link> </p>
                  </form>
            </div>
      );
};

export default Signup;