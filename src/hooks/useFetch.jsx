import React, { useEffect, useState } from "react";

const useFetch =  ({ url, ...other}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);


  
  useEffect(() => {
    
    (async()=>{
      setIsLoading(true)
      //https://www.googleapis.com/drive/v3/files/19GRbMBzGDqVU2lzl8s6DzV22DzMRBD5Q?alt=media&key=412597297824-0a28ur5vqtoq1dnmfn6neigik722vtk9.apps.googleusercontent.com
      const response = await fetch(url,{...other});
      const xData = await response.json();
      setUserData(xData)
      setIsLoading(false)
      console.log("response | data: ",xData );

    })()
  

  }, []);

  useEffect(() => {
    if (!!isLoading) return
    setData(userData)
    setIsLoading(false)
  }, [isLoading,userData]);

  // if (isLoading) return { isLoading: true, data: {}}
  

  return { isLoading, data };
};

export default useFetch;
