import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const Dashboard = () => {
  const {id} = useParams()
  
  
  const url = `https://voting-app-8ug3.onrender.com/dashboard/${id}`
const [user, setUser] = useState(null)

  const fetchUser = async ()=>{ 
    try {
      const response = await fetch(url)
      console.log(response);
      
      if (response.ok){
        const data = await response.json()
       
        setUser(data)
        console.log(data);
        
      } else {
        console.log('Failed to fetch user data');
        
      }
    } catch (error) {
      console.log(error)
  }
  }

useEffect(()=>{ 
  fetchUser()
}, [id])

return (
  <div className="min-h-screen bg-gray-100 py-8 px-4">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
    Voter List
    
  </h1>
  <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    {/* {user.name} */}
    </div>
  </div>
            
      
  )
}

export default Dashboard