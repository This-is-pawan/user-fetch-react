import { useEffect, useState } from "react";

const url = 'https://api.github.com/users/QuincyLarson';

const Example = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setValue(data);
        // console.log(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!value) {
    return (
      <div className="loader"></div>
      
    );
  }
  const { id, avatar_url, bio, company ,name} = value;
  return (
    <div className="lists" key={id}>
      <h2>{bio}</h2>
      <p  style={{color:'blue'}}> <b>{name}</b></p>
      <img src={avatar_url} alt="User Avatar" />
      <span>{company}</span>
    </div>
  );
};

export default Example;
