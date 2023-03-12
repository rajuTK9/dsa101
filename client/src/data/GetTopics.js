import { useState, useEffect } from "react";

export default function GetTopics() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const getTopics = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/get-topics`
        );
        const data = await res.json();

        if (data.status === 422 || data.status === 500) {
          alert(data.error);
          return data.error;
        }
        setTopics(data);
      } catch (err) {
        return "An erros occured: " + err;
      }
    };
    getTopics();
  }, []);

  if (topics.length !== 0) return topics;
  return null;
}
