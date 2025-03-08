import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';

const Signup = () => {
      const { create_user } = useContext(AuthContext);
      const [error, set_error] = useState('');

      const handle_submit = (event) => {
            event.preventDefault();
            const form = event.target;
            const displayName = form.displayName.value;
            const email = form.email.value;
            const password = form.password.value;
            const photoURL = form.photoURL.value;
            const register = { displayName, email, password, photoURL };
            console.log(register);
            if (!(/[a-z]/).test(password)) {
                  set_error('Password must contain at last Lowercase letter..');
                  return;
            }
            if (!(/[A-Z]/).test(password)) {
                  set_error('Password must container at last Uppercase letter..');
                  return;
            }
            if (password.length < 6) {
                  set_error('Password must contain at last 6 characters..');
                  return;
            }

            create_user(email, password)
      .then((result) => {
            console.log(result.user);

            // User profile update
            updateProfile(result.user, {
                  displayName: displayName,
                  photoURL: photoURL
            })
            .then(() => {
                  console.log("Profile Updated:", result.user);
                  
                  // ইউজার তথ্য সার্ভারে পাঠানো
                  fetch('https://sports-store-server-phi.vercel.app/users', {
                        method: 'POST',
                        headers: {
                              'content-type': 'application/json'
                        },
                        body: JSON.stringify({
                              email,
                              displayName,
                              photoURL
                        })
                  })
                  .then(res => res.json())
                  .then((data) => {
                        console.log(data);
                        if (data.insertedId) {
                              Swal.fire({
                                    icon: "success",
                                    title: "Registered Successfully",
                                    timer: 3000
                              });
                              form.reset();
                        }
                  });
            })
            .catch(error => console.error("Profile Update Error:", error));
      })
      .catch((error) => {
            set_error('This email already exists');
            return;
      });
      };

      return (
            <div className='flex flex-col justify-center items-center mt-2 images '>
                  <form onSubmit={handle_submit} className="form">
                        <p className="title">Register</p>
                        <p className="message">Signup now and get full access to our app.</p>

                        <label>
                              <input className="input" type="text" name="displayName" required />
                              <span>Firstname</span>
                        </label>
                        <label>
                              <input className="input" type="email" name="email" required />
                              <span>Email</span>
                        </label>
                        <label>
                              <input className="input" type='photo' name="photoURL" required />
                              <span>PhotoURL</span>
                        </label>
                        <label>
                              <input className="input" type="password" name="password" required />
                              <span>Password</span>
                        </label>
                        {
                              error && <p className='text-red-500 font-bold text-lg'>{error}</p>
                        }
                        <button className="submit">Submit</button>
                        <p className="signin">Already have an account? <Link to="/login">Signin</Link></p>
                  </form>
            </div>
      );
};

export default Signup;
