// import { createContext, useContext, useState, useEffect } from 'react';
// // import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user data from API
//     async function fetchUser() {
//       try {
//         const response = await fetch('/api/users'); // Assumes a backend route that verifies and returns the user data
//         setUser(response.data.user); // Should include user role
//       } catch (error) {
//         setUser(null);
//       }
//     }
//     fetchUser();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook for easy access to auth context
// export const useAuth = () => useContext(AuthContext);


// import { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const response = await fetch('/api/users');
//         const data = await response.json();
//         if (response.ok) {
//           setUser(data.user); // Ensure this matches your API's structure
//         } else {
//           console.error("Failed to fetch user:", data.message);
//           setUser(null);
//         }
//       } catch (error) {
//         console.error("Failed to fetch user:", error);
//         setUser(null);
//       }
//     }
//     fetchUser();
//   }, []);
  

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
  const [user, setUser ] = useState(null);

  useEffect(() => {
    const storedUser  = JSON.parse(localStorage.getItem("user"));
    setUser (storedUser );
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);