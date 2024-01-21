const router = require("express").Router();
const Restaurant = require("../models/restaurant");
const restaurants = require("../config/updated_data.json")

router.get("/restaurants", async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    let sort = req.query.sort || "Aggregate rating"; // Field name corrected
    let cuisines = req.query.cuisines || "All"; // Field name corrected

    const cuisineOptions = [
      "Asian",
      "Indian",
      "Filipino",
      "Seafood",
      "Sushi",
      "Japanese",
      "Korean",
      "Desserts",
      "French",
    ];

    cuisines === "All"
      ? (cuisines = [...cuisineOptions]) // Variable name corrected
      : (cuisines = req.query.cuisines.split(","));

    req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

    let sortBy = {};
    if (sort[1]) {
      sortBy[sort[0]] = sort[1]; // Variable name corrected
    } else {
      sortBy[sort[0]] = "asc";
    }

    const restaurants = await Restaurant.find({
      "Restaurant Name": { $regex: search, $options: "i" }, // Field name corrected
    })
      .where("Cuisines")
      .in([...cuisines])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    const total = await Restaurant.countDocuments({
      Cuisines: { $in: [...cuisines] },
      "Restaurant Name": { $regex: search, $options: "i" }, // Field name corrected
    });

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      Cuisines: cuisineOptions,
      restaurants,
    };

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
});

// const insertRestaurants = async () => {
//     try {
//         const docs = await Restaurant.insertMany(restaurants);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertRestaurants()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))


module.exports = router;
