import React from 'react';
import CoinBorderStyle from './CoinBorder.style';
import DataTable from '../../components/DataTable';
import { useState, useEffect } from 'react';
import { getAllCoinList } from '../../core/api';
import { useQuery } from 'react-query';
import { Constant } from '../../core/constant';
import useLocalStorage from '../../core/hooks/useLocalStorage';
import FilterBox from '../../components/FilterBox';
import { formatCurrency, formatPricePercentage } from '../../core/utils';

interface CoinBorderProps {}

const CoinBorder: React.FC<CoinBorderProps> = ({}) => {
  const PAGE_SIZE = 50;
  const [myFavorite, setMyFavorite] = useLocalStorage('myFavorite', '');
  const [isLastPage, setIsLastPage] = useState(false);
  const [searchParams, setSearchParams] = useState<any>({
    vs_currency: 'krw',
    order: 'all',
    per_page: PAGE_SIZE,
    page: 1,
    sparkline: false,
    price_change_percentage: '1h,24h,7d',
  });
  const [coinList, setCoinList] = useState<any[]>([]);

  const { refetch, isFetching } = useQuery<any, any>(
    'getAllCoinList',
    () => getAllCoinList({ ...searchParams }),
    {
      retry: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        const filtered = data.map((coin: any) => {
          coin.isFavorite = myFavorite.includes(coin.id);
          const {
            name,
            symbol,
            current_price,
            price_change_percentage_1h_in_currency,
            price_change_percentage_24h_in_currency,
            price_change_percentage_7d_in_currency,
            market_cap_change_24h,
          } = coin;
          return {
            name,
            symbol,
            current_price: formatCurrency(
              current_price,
              searchParams.vs_currency
            ),
            price_change_percentage_1h_in_currency: formatPricePercentage(
              price_change_percentage_1h_in_currency
            ),
            price_change_percentage_24h_in_currency: formatPricePercentage(
              price_change_percentage_24h_in_currency
            ),
            price_change_percentage_7d_in_currency: formatPricePercentage(
              price_change_percentage_7d_in_currency
            ),
            market_cap_change_24h: formatCurrency(
              market_cap_change_24h,
              searchParams.vs_currency
            ),
          };
        });

        if (searchParams.page === 1) {
          setCoinList(filtered);
        } else {
          setCoinList([...coinList, ...filtered]);
        }
        if (data.length < PAGE_SIZE) {
          setIsLastPage(true);
        }
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch, searchParams]);

  return (
    <CoinBorderStyle.Container>
      <div className="table-filter">
        <FilterBox
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          refetch={refetch}
        />
      </div>
      <DataTable columns={Constant.COLUMNS} rows={coinList} />
      {!isLastPage && (
        <div
          className="load-more"
          onClick={() => {
            setSearchParams({
              ...searchParams,
              page: searchParams.page + 1,
            });
          }}
        >
          더보기
        </div>
      )}

      {isFetching && (
        <>
          <div className="dimmed"></div>
          <CoinBorderStyle.Spinner className="loader-spinner"></CoinBorderStyle.Spinner>
        </>
      )}
    </CoinBorderStyle.Container>
  );
};

export default React.memo(CoinBorder);
