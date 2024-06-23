export const fetchUserAddress=async(userId)=>{
  const response = await fetch(`http://localhost:5000/api/address?userId=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
}