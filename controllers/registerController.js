const getAllRegister = (reg, res, next) => {
  res.json([
    {
      name: "celal berke akyol",
      age: 21,
      country: "Turkey",
    },
    {
      name: "irem biler",
      age: 21,
      country: "Turkey",
    },
    {
      name: "Harun akyol",
      age: 50,
      country: "Turkey",
    },
  ]);
};

module.exports = {
    getAllRegister
}