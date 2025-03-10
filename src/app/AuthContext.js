

// import { createContext, useContext, useEffect, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser ] = useState(null);

//   useEffect(() => {
//     const storedUser  = JSON.parse(localStorage.getItem("user"));
//     setUser (storedUser );
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser  }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// import { createContext, useContext, useEffect, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if we are in the browser (to avoid SSR issues)
//     if (typeof window !== 'undefined') {
//       const storedUser = JSON.parse(localStorage.getItem('user'));
//       setUser(storedUser);
//     }
//   }, []);

//   // To ensure user changes are saved in localStorage
//   useEffect(() => {
//     if (user !== null) {
//       localStorage.setItem('user', JSON.stringify(user));
//     }
//   }, [user]);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
