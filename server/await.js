const time1 = async () => {
  return 1;
};

const time2 = async x => {
  console.log(x);
};

const demo = async () => {
  const a = await time1();
  await time2(a);
};

demo();
