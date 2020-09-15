const baseUrl = "http://localhost:8080/users/";

const getUserRequest = async (userId) => {
  return fetch(`${baseUrl}${userId}`, {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  });
};

const getEducationsRequest = async (userId) => {
  return fetch(`${baseUrl}${userId}/educations`, {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  });
};

export { getUserRequest, getEducationsRequest };
