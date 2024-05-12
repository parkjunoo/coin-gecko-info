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
      label: 'ss',
      width: '50px',
      isCustom: true,
    },
    {
      props: 'name',
      label: '자산',
    },
    {
      props: 'symbol',
      label: ' ',
    },
    {
      props: 'current_price',
      label: 'Price',
    },
    {
      props: 'price_change_percentage_1h_in_currency',
      label: '1H',
    },
    {
      props: 'price_change_percentage_24h_in_currency',
      label: '24H',
    },
    {
      props: 'price_change_percentage_7d_in_currency',
      label: '7D',
    },
    {
      props: 'market_cap_change_24h',
      label: '24H Volume',
    },
  ];
}
