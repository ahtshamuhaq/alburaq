import { dataServer } from "./axios.config";

const user = JSON.parse(localStorage.getItem("user"));
const userId = user.userId;
export const createOrder = (data) => {
  let orderDescription = data.orderDescription;
  let specialRequests = data.specialRequests;
  let orderAddress = data.orderAddress;
  let orderType = data.orderType;
  let ordersFile = data.ordersFile;

  const formData = new FormData();

  formData.append("orderDescription", orderDescription);
  formData.append("specialRequests", specialRequests);
  formData.append("orderAddress", orderAddress);
  formData.append("orderType", orderType);
  formData.append("ordersFile", ordersFile);

  console.log("Form Data: ", formData);

  console.log("data is ", data);
  return new Promise((resolve, reject) => {
    dataServer
      .post(`/user/create/order/${userId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data;",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

<<<<<<< HEAD
export const getOrders = (id: number) => {
=======
export const getOrders = (id) => {
>>>>>>> 9627adc3a7341bc80273d70de2e6902fe6235633
  return new Promise((resolve, reject) => {
    dataServer
      .get(`/user/get/orders/${userId}`, {
        headers: {
          "Content-Type": "multipart/form-data;",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

<<<<<<< HEAD
export const downloadOrdersFile = (fileName: string) => {
=======
export const downloadOrdersFile = (fileName) => {
>>>>>>> 9627adc3a7341bc80273d70de2e6902fe6235633
  console.log("user is ", user);
  return new Promise((resolve, reject) => {
    dataServer
      .get(`admin/download/orderfile/${fileName}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
