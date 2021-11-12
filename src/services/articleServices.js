import axiosWithAuth from "./../utils/axiosWithAuth";

const articleService = async () => {
  try {
    const response = await axiosWithAuth().get(
      "http://localhost:5000/api/articles"
    );
    return response;
  } catch (error) {
    console.error("COULD NOT FETCH ARTICLES!", error);
  }
};

export default articleService;
//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.
