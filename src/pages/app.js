// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/app/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
    </AuthProvider>
  );
}

export default MyApp;
