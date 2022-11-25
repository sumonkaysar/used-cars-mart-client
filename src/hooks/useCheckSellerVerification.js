import { useEffect, useState } from "react"

const useCheckSellerVerification = email => {
  const [isVerified, setIsVerified] = useState('');
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/verified?email=${email}`)
        .then(res => res.json())
        .then(data => {
          setIsVerified(data.verified);
        })
        .catch(err => console.error(err));
    }
  }, [email]);
  return [isVerified];
}

export default useCheckSellerVerification;