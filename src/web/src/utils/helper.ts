export function toFloat(n: number | string, precision: number = 2) {
  const nn = typeof n === 'string' ? parseFloat(n) : n;
  const k = Math.pow(10, precision);
  return Math.round(nn * k) / k;
}
