import { useEffect, useState } from "react"

const useGetRole = email => {
  const [role, setRole] = useState('');
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/role?email=${email}`)
        .then(res => res.json())
        .then(data => {
          setRole(data.role);
        })
        .catch(err => console.error(err));
    }
  }, [email]);
  return [role];
}

export default useGetRole;