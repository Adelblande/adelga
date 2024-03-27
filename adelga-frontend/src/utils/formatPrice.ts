export function formatPrice(price: number) {
  const options = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  return Intl.NumberFormat("pt-BR", options).format(price);
}
