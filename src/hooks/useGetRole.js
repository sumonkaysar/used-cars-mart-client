import { useEffect, useState } from "react"

const useGetRole = email => {
  const [role, setRole] = useState('');
  const [isUserLoading, setIsUserLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://used-cars-mart-server.vercel.app/users/role?email=${email}`)
        .then(res => res.json())
        .then(data => {
          setRole(data.role);
          setIsUserLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [email]);
  return [role, isUserLoading];
}

export default useGetRole;