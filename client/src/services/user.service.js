import { authHeader, handleResponse } from "../helpers";

const getAll = () => {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch("/api/users", requestOptions).then(handleResponse);
};

export const userService = {
  getAll,
};
