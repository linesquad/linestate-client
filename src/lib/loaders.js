import { defer } from "react-router-dom";
import apiReq from "./apiReq";

export const singlePageLoader = async ({ params }) => {
  const res = await apiReq.get(`/posts/${params.id}`);
  return res.data;
};

export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiReq.get(`/posts?${query}`);
  return defer({ postResponse: postPromise });
};

export const profilePageLoader = async () => {
  const postPromise = apiReq.get(`/users/profilePosts`);
  const chatPromise = apiReq.get(`/chats`);
  return defer({ postResponse: postPromise, chatResponse: chatPromise });
};
