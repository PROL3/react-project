import Header from '../Components/Header';
import React, { useState } from "react";
import Footer from '../Components/Footer';

const Contactus = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
    <Header />
    <div className="  min-h-screen bg-gradient-to-r from-blue-200 to-blue-300 flex items-center justify-center">
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg flex justify-center">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            {isLogin ? "Login" : "Register"}
          </h2>
          <form className="grid grid-cols-2 gap-4 ">
            {!isLogin && (
              <>
                <div className="col-span-1">
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div className={`col-span-${isLogin ? 2 : 1}`}>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className={`col-span-${isLogin ? 2 : 1}`}>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {!isLogin && (
              <div className="col-span-2">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="w-full mt-1 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Create an account" : "Already have an account? Login"}
            </button>
            
          </div>
        </div>
      
      </div>
    
    </div>
      <Footer />
    </>
    
  );
};

export default Contactus;