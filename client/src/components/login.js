import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]: value,
    }));
  };
  const[res,setRes]=useState("");
  const[users,setUsers]=useState([]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
   const response=await axios.get("http://localhost:3001/users/register")
   setUsers(response.data);
   setFormData({
    name: '',
    email: '',
    password: '',
   })
   setRes("User Login Sucessfully !");
}catch(err){
    console.log(err)
   }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-indigo-200 p-6 rounded-lg">
        
      <h1 className="text-bold text-white mb-4">Login here</h1>
      <div className="form-group flex flex-col w-64">
         <h1>{res}</h1>
        <label htmlFor="name" className="text-white mb-2">Username</label>
        <input 
          className="p-2 mb-4 rounded-md" 
          id="name" 
          name="name"
          type="text" 
          value={formData.name} 
          onChange={handleChange}
          placeholder="Enter your username"
        />
        <label htmlFor="password" className="text-white mb-2">Password</label>
        <input 
          className="p-2 mb-4 rounded-md" 
          id="password" 
          name="password"
          type="password" 
          value={formData.password} 
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="bg-white text-blue-500 p-2 rounded-md mt-4">Submit</button>
    </form>
   <ul>
   {users.map((user) => (
     <li key={user._id} className="text-white">
       {user.name} - {user.email}
     </li>
   ))}
 </ul>
 </div>
  );
}
