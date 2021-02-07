const mongoose = require("mongoose");
const News = require("../../../../models/News");
const dbConnect = require("../../../../utils/dbConnect");

dbConnect();
export default async (req, res) => {
  const data = await News.find({}).limit(5);
  res.json(data);
};
