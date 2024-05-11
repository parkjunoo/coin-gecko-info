import { api } from '../core/service';

export const getAllCoinList = () => {
  return api.service.get('/coins/markeks').then((response) => {
    return response && response.data;
  });
};
