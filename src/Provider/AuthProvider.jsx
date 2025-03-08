import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
      const [user, set_user] = useState(null);
      const [loading, set_loading] = useState(true);
      const google_provider = new GoogleAuthProvider();

      const handle_google_login = () => {
            return signInWithPopup(auth, google_provider);
      }

      const create_user = (email, password) => {
            set_loading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      };

      const login_user = (email, password) => {
            set_loading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }

      const sign_out = () => {
            return signOut(auth);
      }

       useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (current_user) => {
                  if (current_user) {
                        set_user(current_user);
                  }
                  else {
                        set_user(null);
                  };
                  set_loading(false);
            })
            return () => {
                  unsubscribe();
            }
       }, [])

       const manage_profile = (name, profile) => {
            updateProfile(auth.currentUser, {
                  displayName: name, photoURL: profile
            })
       }

      const auth_info = {
            user,
            set_user,
            loading,
            create_user,
            login_user,
            handle_google_login,
            manage_profile,
            sign_out
      };

      return (
            <AuthContext.Provider value={auth_info}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;
