import { React, useState } from "react";

const COHORT_NAME = "2104-UIC-RM-WEB-PT";

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const postEndPoint = BASE_URL + `/posts`;

const authToken = window.localStorage.getItem("token");

// //, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${authToken}`,
//     },

console.log(authToken);
const CreatePost = () => {
  const fetchPost = async () => {
    try {
      const response = await fetch(postEndPoint);

      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  fetchPost();

  return <div>Where are the post?</div>;
};

export default CreatePost;
