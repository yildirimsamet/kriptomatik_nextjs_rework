import dbConnect from "../../../../utils/dbConnect";
import News from "../../../../models/News";
export default async (req, res) => {
  dbConnect();
  const data = await News.find({})
    .sort({ id: -1 })
    .skip(parseInt(req.query.id))
    .limit(10);
  res.json(data);
};
