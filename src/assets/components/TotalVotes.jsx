import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const TotalVotes = () => {
  const [totalVote, setTotalVote] = useState();
const [apcvote, setApcVote] = useState();
const [pdpvote, setPdpVote] = useState();

  const url = "https://voting-app-8ug3.onrender.com";

  const getTotalVotes = async () => {
    try {
      const response = await fetch(`${url}/total-vote`);
      
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        
        setTotalVote(data.totalVotes);
      } else {
        toast.error("Failed to fetch total votes");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching total votes");
    }
  };

  const getApcVotes = async () => {
    try {
      const response = await fetch(`${url}/apc-VoteCount`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        setApcVote(data.apcVoteCount);
      } else {
        toast.error("Failed to fetch APC votes");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching APC votes");
    }
  }


  const getPdpVotes = async () => {
    try {
      const response = await fetch(`${url}/pdp-VoteCount`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        setPdpVote(data.pdpVoteCount);
      } else {
        toast.error("Failed to fetch APC votes");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching APC votes");
    }
  }

  useEffect(() => {
    getTotalVotes();
    getApcVotes();
    getPdpVotes();
  }, []);

 
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Total Vote Count
      </h1>
      <ToastContainer />

      <div className="grid gap-6 lg:grid-cols-2 md:grid-cols-1">
        {/* APC Vote Section */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">APC</h2>
          <div className="mb-4">
            <p className="text-gray-600">Total Votes: {apcvote}</p>
          
          </div>
          <div className="h-2 bg-green-200 rounded-full">
            <div
              className="h-full bg-green-600 rounded-full"
            ></div>
          </div>
        </div>

        {/* PDP Vote Section */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">PDP</h2>
          <div className="mb-4">
            <p className="text-gray-600">Total Votes: {pdpvote}</p>
          </div>
          <div className="h-2 bg-blue-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full"
            ></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mt-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Total Votes</h2>
          <div className="mb-4">
            <p className="text-gray-600 text-center">Total Votes: {totalVote}</p>
          </div>
          <div className="h-2 bg-green-200 rounded-full">
            <div
              className="h-full bg-green-600 rounded-full"
            ></div>
          </div>
        </div>
    </div>
  );
};

export default TotalVotes;
