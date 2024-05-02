import { api } from "../core/service";

export const getAllTxData = ({}) => {
  return api.service
    .get("/delightlabs-fe-hometest-mockdata.json")
    .then((response) => {
      return response && response.data;
    });
};
