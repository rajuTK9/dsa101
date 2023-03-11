import { useState, useEffect } from "react";

export default function GetCourse(query) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await fetch(process.env.REACT_APP_SERVER_URL + query);
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
    getCourse();
  }, [query]);

  if (data.length !== 0) return data;
  return null;
}
