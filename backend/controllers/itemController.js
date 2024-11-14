const Item = require("../models/itemSchema");

const addItems = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const item = new Item({ name, price, description, category });
    await item.save();
    res.status(200).send("item added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding item");
  }
};
const getItems = async (req, res) => {
  try {
    const category = req.query.category;
    console.log("Requested category:", category);  // Log the requested category

    let items;
    if (category) {
      // Query the database with exact matching to avoid typos
      items = await Item.find({ category });  
      console.log(`Items fetched for category "${category}":`, items);
    } else {
      items = await Item.find();
      console.log("All items fetched:", items);
    }

    res.status(200).send(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Error fetching items");
  }
};


module.exports = { addItems, getItems };
