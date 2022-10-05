import axios from "axios";

const getPackageApi = (x = 15, y = 1) => {
  const [count, page] = [x, y];

  return axios.get("/package/get-packages", {
    count,
    page,
  });
};

export default getPackageApi;
