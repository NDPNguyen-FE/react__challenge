import axiosClient from "./axiosClient";

const productsApi = {
  getAllProducts: () => {
    const url = "/products";
    return axiosClient.get(url);
  },

  getProducts: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
};

export default productsApi;
