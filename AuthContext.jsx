import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [UserAccountId, setUserAccountId] = useState(null);

  useEffect(() => {
    // Check if the token is available in local storage or cookies
    const token = localStorage.getItem('authToken');

    if (token) {
      // If the token is available, decode it to get the UserAccountId
      const decodedToken = decodeToken(token);
      const userAccountId = decodedToken.userId;
      setUserAccountId(userAccountId);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ UserAccountId, setUserAccountId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
