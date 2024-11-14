import { useEffect, useState } from "react"

const url='https://api.github.com/users'


const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const Fething = async () => {
      try {
        
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    Fething();
  }, []);

  return (
    <>
      <div>
        {users.map((user)=>{
const {id,login,avatar_url,html_url}=user;
return (
 <div className="lists"  key={id}>
 <div className="list">
  <img src={avatar_url} alt={login} />
  <h2>{login}</h2>
  <button className="btns"><a href={html_url}>view profile</a></button>

 </div>
 </div>
)
        })}
        
      </div>
    </>
  );
};

export default User;

