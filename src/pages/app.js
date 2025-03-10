
// import { SessionProvider } from "next-auth/react";
// import { AuthProvider } from "@/app/AuthContext";

// function MyApp({ Component, pageProps }) {
//   return (
//     <AuthProvider>
//       <SessionProvider session={pageProps.session || null}>
//         <Component {...pageProps} />
//       </SessionProvider>
//     </AuthProvider>
//   );
// }

// export default MyApp;



import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/app/AuthContext";
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isClientSide, setIsClientSide] = useState(false);

  // Set to true after component mounts (client-side rendering)
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  return (
    <AuthProvider>
      {/* Only render SessionProvider after the component mounts (client-side) */}
      {isClientSide && (
        <SessionProvider session={pageProps.session || null}>
          <Component {...pageProps} />
        </SessionProvider>
      )}
    </AuthProvider>
  );
}

export default MyApp;