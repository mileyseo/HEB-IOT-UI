import veges from "../../db/models/Vegetable";

export default async function handler (req, res) {
    // table.increments("itemNo").primary();
    // table.string("itemName", 50);
    // table.string("aisleNo", 20);
    // table.integer("sectionNo");
    // table.integer("shelfNo");
    // table.integer("quantity");
    const {
        upc,
        itemName,
        aisleNo,
        aisleSide,
        sectionNo,
        shelfNo,
        quantity,
    } = req.body;

    await veges.forge().save({
        upc,
        itemName,
        aisleNo,
        aisleSide,
        sectionNo,
        shelfNo,
        quantity,
    });

    res.status(200).json({msg: "done"})
}