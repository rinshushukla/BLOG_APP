const notfound = (req, res, next) => {
  res
    .status(404)
    .json({ code: 404, status: false, messgae: "Api is Not Found " });
};

module.exports = { notfound };
