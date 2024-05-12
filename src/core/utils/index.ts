export function formatCurrency(value: number, currency: 'krw' | 'usd'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value);
}

export function formatPricePercentage(value: number): string {
  if (parseInt(value.toFixed(1)) === 0) {
    return value.toFixed(1).replace('-', '') + '%';
  }
  return value.toFixed(1) + '%';
}
