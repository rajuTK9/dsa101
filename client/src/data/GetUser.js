import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Getdata() {
  const [data, setData] = useState([]);
  const { user } = useAuth0();
  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch(`/get-user/${user.sub}`);
        const data = await res.json();

        if (data.status === 422 || data.status === 500) {
          alert(data.error);
          return data.error;
        }

        setData(data);
      } catch (err) {
        return "An erros occured: " + err;
      }
    };
    getdata();
  }, [user]);

  if (data.length !== 0) return data[0];
  return null;
}
