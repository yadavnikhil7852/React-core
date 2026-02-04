import React from 'react'
import { useEffect } from 'react';
function userCard({userDetails}) {
 
  // console.log(userDetails)
  useEffect(() => {
  console.log("Mounted", userDetails.name);
}, []);

  return (
   <p>hello my name is {userDetails.name} and my age is {userDetails.age} </p>
  )
}

export default userCard