import { api } from '../core/service';

interface GetAllCoinListParams {
  vs_currency: string;
  order?: string;
  per_page?: number;
  page?: number;
  price_change_percentage?: string;
}

export const getAllCoinList = ({
  vs_currency,
  order,
  per_page,
  page,
  price_change_percentage,
}: GetAllCoinListParams) => {
  return api.service
    .get('/coins/markets', {
      vs_currency,
      order,
      per_page,
      page,
      price_change_percentage,
    })
    .then((response) => {
      return response && response.data;
    });
};
