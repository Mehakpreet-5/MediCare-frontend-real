

import React, { useState } from 'react';
import doctorData from '../../list'; // Assuming the data file is in the same directory
import Sidebar from './sidebar'; // Import the Sidebar component

const AdminDoctors = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [doctors, setDoctors] = useState(doctorData); // Initialize state with doctor data
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialization: '',
    experience: '',
    availability: '',
    image: '',
    category: '', // Store the category to which the doctor belongs
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDoctor = (e) => {
    e.preventDefault();
    const categoryIndex = doctors.findIndex((cat) => cat.category === newDoctor.category);
    if (categoryIndex !== -1) {
      // Add the new doctor to the specific category
      const updatedDoctors = [...doctors];
      updatedDoctors[categoryIndex].doctors.push(newDoctor);
      setDoctors(updatedDoctors);
      // Reset the input fields
      setNewDoctor({ name: '', specialization: '', experience: '', availability: '', image: '', category: '' });
    }
  };

  const handleRemoveDoctor = (categoryIndex, doctorIndex) => {
    const updatedDoctors = [...doctors];
    updatedDoctors[categoryIndex].doctors.splice(doctorIndex, 1);
    setDoctors(updatedDoctors);
  };

  return (
    <div className="flex bg-orange-100 bg-opacity-70">
      {/* Sidebar */}
      <div className={`fixed lg:sticky top-0 h-screen w-64 z-10 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
        <Sidebar />
      </div>

      {/* Toggle Button for mobile screens */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button
          onClick={toggleSidebar}
          className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none"
        >
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-28 lg:mr-20 container mx-auto p-6">
        <h1 className="text-6xl text-orange-400 font-serif mt-6 mb-10 text-center">Doctors List</h1>

        {/* Add Doctor Form */}
        <form className="mb-8 space-y-3" onSubmit={handleAddDoctor}>
          <h2 className="text-xl font-semibold mb-4">Add New Doctor</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newDoctor.name}
            onChange={handleInputChange}
            required
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={newDoctor.specialization}
            onChange={handleInputChange}
            required
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={newDoctor.experience}
            onChange={handleInputChange}
            required
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            name="availability"
            placeholder="Availability"
            value={newDoctor.availability}
            onChange={handleInputChange}
            required
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newDoctor.image}
            onChange={handleInputChange}
            required
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            name="category"
            placeholder="Category (e.g. General Physician)"
            value={newDoctor.category}
            onChange={handleInputChange}
            required
            className="border rounded p-2 mr-2"
          />
          <button type="submit" className="bg-orange-300 text-gray-700 rounded p-2">
            Add Doctor
          </button>
        </form>

        {/* Loop through categories */}
        {doctors.map((categoryData, index) => (
          <div key={index} className="mb-12 mt-20">
            <h2 className="text-3xl font-serif text-orange-400 font-semibold mb-6">{categoryData.category}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Loop through doctors */}
              {categoryData.doctors.map((doctor, doctorIndex) => (
                <div key={doctorIndex} className="border p-4 bg-white bg-opacity-20 w-full rounded-lg shadow-lg">
                  {/* <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-32 w-32 mx-auto mb-4 rounded-full object-cover"
                  /> */}
                  <h3 className="text-xl font-semibold text-center">{doctor.name}</h3>
                  <p className="text-gray-600 text-center">
                    Specialization: {doctor.specialization}
                  </p>
                  <p className="text-gray-600 text-center">Experience: {doctor.experience}</p>
                  <p className="text-gray-600 text-center">Availability: {doctor.availability}</p>
                  <button
                    className="mt-4 bg-red-500 text-white rounded p-2 w-full"
                    onClick={() => handleRemoveDoctor(index, doctorIndex)}
                  >
                    Remove Doctor
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDoctors;
