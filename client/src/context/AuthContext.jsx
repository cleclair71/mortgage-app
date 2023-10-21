import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND}/api/profile`, {withCredentials: true, credentials: 'include'});
        console.log(response)
    
          const userData = response.data
          setUser(userData);
      
      } catch (error) {
      
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); 

  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);