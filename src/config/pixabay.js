export const API_KEY = "10079975-5727ee36ed8c6e10b6cb9bb53";
export const ROOT_URL = "https://pixabay.com/api/";

export default params => {
  let url = `${ROOT_URL}?key=${API_KEY}`;
  params["per_page"] = 50;
  for (let param in params) {
    const key = param;
    const value = params[param];
    url += `&${key}=${value}`;
  }
  return url;
};
