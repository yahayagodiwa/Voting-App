import  {  useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import Loader from './Loader';

const Vote = () => {
    const [voting,  setVoting] = useState({
        voterId:"",
        politicalParty:""
    })
const handleChange = (e)=>{
const {name, value} = e.target
setVoting({...voting, [name]: value})
}
    const [isLoading, setIsLoading] = useState(false)

 const handleVoting = async ()=>{
        try {
            setIsLoading(true)
            const response = await fetch('https://voting-app-8ug3.onrender.com/vote', {
                method: 'POST',
                body: JSON.stringify(voting),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if(response.ok){
                const data = await response.json()
                toast.success(data.message)
                setIsLoading(false)
            } else {
                // const data = await response.json()
                setIsLoading(false)
                toast.error("Invalid Voter Id")
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
     onSubmit={handleVoting}
     className="max-w-lg w-full bg-white rounded-lg shadow-md p-6"
   >
     <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
         Vote
     </h2>

     <div className="space-y-4">

       <div>
         <label htmlFor="age" className="block text-gray-700 font-semibold">
              Voter Id
         </label>
         <input
           type="number"
           id="voterId"
           name="voterId"
           value={voting.voterId}
           onChange={handleChange}
           className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
         />
       </div>

       <div>
         <label
           htmlFor="gender"
           className="block text-gray-700 font-semibold"
         >
              Political Party
         </label>
         <select
           id="politicalParty"
           name="politicalParty"
           value={voting.politicalParty}
           onChange={handleChange}
           className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        required
        >
           <option value="" disabled>
                Select Political Party
           </option>
           <option value="apc">APC</option>
           <option value="pdp">PDP</option>
          
         </select>
       </div>

    

       <button
         type="submit"
         className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition"
       >
         Vote
       </button>
     </div>
   </form>
}
 </div> 
  )
}

export default Vote