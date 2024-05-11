import { api } from '../core/service';

interface GetAllCoinListParams {
  vs_currency: string;
  order?: string;
  per_page?: number;
  page?: number;
  sparkline?: boolean;
}

export const getAllCoinList = ({
  vs_currency,
  order,
  per_page,
  page,
  sparkline,
}: GetAllCoinListParams) => {
  return api.service
    .get('/coins/markeks', {
      vs_currency,
      order,
      per_page,
      page,
      sparkline,
    })
    .then((response) => {
      return response && response.data;
    });
};
