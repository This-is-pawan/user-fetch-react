

import { useState } from "react";

const Exam = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email, password });
  };

  return (
    <>
      <div>
        <div className="main">
          <h2>Form React</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleInputChange} />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleInputChange} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleInputChange} />

            <button className="btns" type="submit">Submit</button>
          </form>
        </div>
      </div>
      
      {/* <span>{name}</span>
      <span>{email}</span>
      <span>{password}</span> */}
    </>
  );
};

export default Exam;
