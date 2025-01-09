
import  { useContext, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import Loader from './Loader';
import {VoteContext} from './VotingContext';
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    address: "",
  });

  const { isLoading, setIsLoading } = useContext(VoteContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const url = 'https://voting-app-8ug3.onrender.com'

  const handleSubmit =async (e) => {
    e.preventDefault();

    try {
        setIsLoading(true)
        const response = await fetch(`${url}/register`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          })
        
          if (response.ok){
           const data = await response.json()
           toast.success(data.message)
           setIsLoading(false)

          } 
          const data = await response.json()
          setIsLoading(false)
          toast.error(data.error)
          console.log(data.error);
          
    } catch (error) {
        console.log(error);
        
    }
  };



  return (
   
    <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-16 p-4">
       <ToastContainer />
         { isLoading ? <Loader /> :
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Register
        </h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-gray-700 font-semibold">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-gray-700 font-semibold"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
             
            </select>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              rows="3"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
}
    </div> 
  );
};

export default Register;
