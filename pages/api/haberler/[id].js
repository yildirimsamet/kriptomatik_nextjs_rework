const mongoose = require("mongoose");
const News = require("../../../models/News");
const dbConnect = require("../../../utils/dbConnect");

dbConnect();
export default async (req, res) => {
  const data = await News.find({})
    .sort({ id: -1 })
    .skip(parseInt(req.query.id))
    .limit(10);
  res.json(data);
};
