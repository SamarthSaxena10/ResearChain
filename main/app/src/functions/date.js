// random date between 1/1/2021 and 1/1/2022 of format dec 31, 2021

const randomDate = () => {
  const start = new Date(2021, 0, 1);
  const end = new Date(2022, 0, 1);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
    .toString()
    .slice(4, 15);
};
