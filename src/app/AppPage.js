import { useSession } from "next-auth/react";
import { useAuth } from "@/app/AuthContext";

const AppPage = () => {
  const { data: session } = useSession();
  const { user } = useAuth();

  if (!session && !user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {user?.name || session?.user?.name}!</h1>
    </div>
  );
};

export default AppPage;
