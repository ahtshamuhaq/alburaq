import { dataServer } from "./axios.config";

<<<<<<< HEAD

=======
>>>>>>> 9627adc3a7341bc80273d70de2e6902fe6235633
export const getServices = () => {
  return new Promise((resolve, reject) => {
    dataServer
      .get("/user/get/services/all", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
