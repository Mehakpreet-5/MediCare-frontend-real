
import { useState, useEffect } from 'react';
import Sidebar from './sidebar';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('/api/users');

        // Check if the request was successful
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await res.json();
        setUsers(data.data); // assuming the response structure is { success: true, data: [...] }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Ensure we stop loading regardless of success or failure
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold text-red-600">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col md:flex-row bg-orange-100 bg-opacity-70 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:ml-20  md:mr-20">
        <h1 className="text-6xl text-orange-400 font-serif mt-6 mb-10 text-center">Users List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.length > 0 ? (
            users.map((user) => (
              <div key={user._id} className="bg-white bg-opacity-60 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold">{user.username}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
