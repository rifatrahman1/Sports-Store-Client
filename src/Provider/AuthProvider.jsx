import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
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

      const auth_info = {
            user,
            set_user,
            loading,
            create_user,
            login_user,
            handle_google_login
      };

      return (
            <AuthContext.Provider value={auth_info}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;
