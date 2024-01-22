export const shortenAddress = (address: string) => {
  const count = address.length >= 6 ? 4 : 2;
  const firstThree = address.slice(0, count);
  const lastThree = address.slice(-count);
  return `${firstThree}...${lastThree}`;
};
