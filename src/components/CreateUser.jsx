import { React, useState, useEffect } from "react";

const COHORT_NAME = "2104-UIC-RM-WEB-PT";

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const postEndPoint = BASE_URL + `/users/register`;

const CreateUser = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const userLogIn = {
      username,
      password,
    };

    // const verifyLogIn = postEndPoint;
    // fetch(verifyLogIn, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user: {
    //       username: "",
    //       password: "",
    //     },
    //   }),
    // })
    //   .then((res) => {
    //     console.log("This is the login response", res, res.json);
    //     return res.json();
    //   })
    //   .catch(console.error);
  };
  return (
    <>
      <h1>We Are Creating Users!!</h1>
      <p>Register</p>
      <form onSubmit={onFormSubmit}>
        <label>
          New Username:
          <input type="text" value={username} onChange={setUserName}></input>
        </label>
        <label>
          New Password:
          <input type="text" value={password} onChange={setPassword}></input>
        </label>
        <button type="submit">Submit User</button>
      </form>
    </>
  );
};

export default CreateUser;
