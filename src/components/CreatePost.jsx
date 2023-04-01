import { React, useState } from "react";

const COHORT_NAME = "2104-UIC-RM-WEB-PT";

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const postEndPoint = BASE_URL + `/posts`;

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
};

export default CreatePost;
