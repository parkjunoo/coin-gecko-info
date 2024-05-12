export class Constant {
  public static readonly BASE_URL = 'https://api.coingecko.com/api/v3';
  public static readonly OPTIONS = [
    {
      props: 'favorite',
      label: 'ss',
      width: '50px',
      isCustom: true,
    },
    {
      props: 'name',
      label: '자산',
    },
  ];
  public static readonly COLUMNS = [
    {
      props: 'favorite',
      label: '',
      isCustom: true,
    },
    {
      props: 'name',
      label: '자산',
      styles: {
        fontWeight: 'bold',
      },
    },
    {
      props: 'symbol',
      label: '',
    },
    {
      props: 'current_price',
      label: 'Price',
      styles: {
        fontWeight: 'bold',
      },
    },
    {
      props: 'price_change_percentage_1h_in_currency',
      label: '1H',
      styles: {
        fontWeight: 'bold',
      },
    },
    {
      props: 'price_change_percentage_24h_in_currency',
      label: '24H',
      styles: {
        fontWeight: 'bold',
      },
    },
    {
      props: 'price_change_percentage_7d_in_currency',
      label: '7D',
      styles: {
        fontWeight: 'bold',
      },
    },
    {
      props: 'market_cap_change_24h',
      label: '24H Volume',
      styles: {
        fontWeight: 'bold',
      },
    },
  ];

  public static readonly ORDER_OPTIONS = [
    {
      label: '전체 보기',
      value: 'all',
    },
    {
      label: '즐겨찾기',
      value: 'favorite',
    },
  ];

  public static readonly CURRENCY_OPTIONS = [
    {
      label: 'KRW',
      value: 'krw',
    },
    {
      label: 'USD',
      value: 'usd',
    },
  ];

  public static readonly PAGE_COUNT_OPTIONS = [
    {
      label: '10',
      value: '10',
    },
    {
      label: '30',
      value: '30',
    },
    {
      label: '50',
      value: '50',
    },
  ];
}
