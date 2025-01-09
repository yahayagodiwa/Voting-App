import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";

const Voters = () => {
 const [voters, setVoters] = useState([])

 const url = 'https://voting-app-8ug3.onrender.com'
  const getVoters = async ()=>{
    try {
    const response = await fetch(`${url}/users`)
    if(response.ok){
      const data = await response.json() 
      setVoters(data)
      // console.log(data);
      
    } else {
      console.log('faill to fetch users');
      
    }
  } catch (error){
    console.log(error);
    
  }
  
  }

  const handleDelete = async (id)=>{
    try {
      
      const response = await fetch(`${url}/users/${id}`, {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json",
            },
          })
      if(response.ok){
          const data  = await response.json()
          toast.success(data.message)
          getVoters()
          
      } else {
          toast.error(response.error)
          
      }
  
  } catch (error) {
      console.log(error);
      
  }
  }
  useEffect(()=> {
    getVoters()
  }, [])
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Voter List
        
      </h1>
      <ToastContainer />
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {voters.map((voter) => (
          <div
            key={voter._id}
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {voter.name}
            </h2>
            <p className="text-gray-600">Email: {voter.email}</p>
            <p className="text-gray-600">Voter ID: {voter.voterId}</p>
            <p className="text-gray-600">Age: {voter.age}</p>
            <p className="text-gray-600">Gender: {voter.gender}</p>
            <p className="text-gray-600">Address: {voter.address}</p>
            <div className="mt-4 flex justify-between">
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  voter.hasVote
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {voter.hasVote ? "Has Voted" : "Not Voted"}
              </span>
              <div className="flex gap-3">
<Link to={`/update/${voter._id}`} >

              <button
                className='inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-700 text-white'
              > Update</button> </Link>



<button
  className='inline-block px-3 py-1 text-sm font-medium rounded-full bg-red-700 text-white'
  onClick={()=> handleDelete(voter._id)}
> Delete</button> 
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Voters