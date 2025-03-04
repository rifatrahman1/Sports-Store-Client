import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
      const [user, set_user] = useState(null);
      const [loading, set_loading] = useState(true);

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
            login_user
      };

      return (
            <AuthContext.Provider value={auth_info}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;
