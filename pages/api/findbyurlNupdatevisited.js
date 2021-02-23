import News from "../../models/News";
import dbConnect from "../../utils/dbConnect";
export default async (req, res) => {
  if (req.method === "POST") {
    dbConnect();
    const { url } = req.body;
    const data = await News.findOne({ url });
    data.visitedCount = data.visitedCount + 1;
    const success = await data.save();
    res.send(success);
  }
};
