import { createContext, useState } from "react";

export const VoteContext = createContext(null);
const VotingContext = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const contextValues =  {
    isLoading, 
    setIsLoading
  };
  return (
    <VoteContext.Provider value={contextValues}>
      {children}
    </VoteContext.Provider>
  );
};

export default VotingContext;
