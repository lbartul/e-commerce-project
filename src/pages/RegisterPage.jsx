import { useState } from "react";
import { Link } from "react-router";

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState("customer");

  return (
    <div className="flex items-center justify-center pt-30 pb-50">
      
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sign Up</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-600 cursor-pointer hover:underline">Login</Link>
          </p>
        </div>

        <form className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ornek@email.com" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Rol Seçiniz</label>
            <select 
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="customer">Customer</option>
              <option value="store">Store</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {selectedRole === "store" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Store Name" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+90 5xx xxx xx xx" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store Tax ID</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="T1234V123456" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store Bank Account (IBAN)</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="TR___________________________" 
                />
              </div>
            </>
          )}

          <button 
            type="button" 
            className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}