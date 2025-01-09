import  { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { data } from 'autoprefixer';

const Update = () => {
    const { id } = useParams()
const [isLoading, setIsLoading] = useState(false)
  const [fillData,  setFillData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    address: "",
  })

  const handleChange = (e)=>{
const {name, value} = e.target

setFillData({...fillData, [name]: value})
  }

const url = 'https://voting-app-8ug3.onrender.com'

const fecthData = async ()=>{
 try {
    const response = await fetch(`${url}/${id}`)
    if (response.ok){
       const data = await response.json()
        setFillData(data)
    } else {

        toast.error('Fail to fetch user data')
    }
 } catch (error) {
    console.log(error)
    
 }
}

useEffect(()=>{
    fecthData()
}, [id])

const handleUpdate = async (e)=>{
e.preventDefault()

try {
    setIsLoading(true)
    const response = await fetch(`${url}/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(fillData),
        headers: {
            "Content-Type": "application/json",
          },
        })
    if(response.ok){
        const data  = await response.json()
        toast.success(data.message)
        setIsLoading(false)
    } else {
        toast.error(data.error)
        setIsLoading(false)
    }

} catch (error) {
    console.log(error);
    
}



}
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <ToastContainer />
      { isLoading ? <Loader /> :
   <form
     onSubmit={handleUpdate}
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
           value={fillData.name}
           onChange={handleChange}
           className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
           value={fillData.email}
           onChange={handleChange}
           className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
           value={fillData.age}
           onChange={handleChange}
           className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
           value={fillData.gender}
           onChange={handleChange}
           className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
           value={fillData.address}
           onChange={handleChange}
           className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
           rows="3"
         ></textarea>
       </div>

       <button
         type="submit"
         className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition"
       >
         Update
       </button>
     </div>
   </form>
}
 </div> 
  )
}

export default Update