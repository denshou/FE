import { axiosInstance } from '../axiosInstance/axiosInstance.js';

export const getProduct = async () => {
  const response = await axiosInstance.get('product/list');
  return response.data;
};

export const getProductDetail = async (id) => {
    const response = await axiosInstance.get(`product/detail/${id}`);
    return response.data;
  };
