import veges from "../../../db/models/Vegetable";

export default async function handler (req, res) {
    
    const {
        upc,
    } = req.query;

    // this will build a SQL like select * from veges.. where upc = $1
    const res_ = await veges.where({upc}).fetch()

    res.status(200).json({msg: "found", product: res_.toJSON()});
}