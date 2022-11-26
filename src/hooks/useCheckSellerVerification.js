import { useEffect, useState } from "react"

const useCheckSellerVerification = email => {
  const [isVerified, setIsVerified] = useState('');
  useEffect(() => {
    if (email) {
      fetch(`https://used-cars-mart-server.vercel.app/users/verified?email=${email}`)
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