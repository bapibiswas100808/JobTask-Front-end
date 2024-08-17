app.get("/allProducts", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const searchTerm = req.query.search || "";
  const brand = req.query.brand || "";
  const category = req.query.category || "";
  const priceRange = req.query.priceRange || "";

  const skip = (page - 1) * limit;

  let filter = {};

  if (searchTerm) {
    filter.ProductName = { $regex: searchTerm, $options: "i" };
  }

  if (brand) {
    filter.BrandName = brand;
  }

  if (category) {
    filter.Category = category;
  }

  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split("-");
    filter.Price = {
      $gte: parseFloat(minPrice),
      $lte: parseFloat(maxPrice),
    };
  }

  const allProducts = await ProductCollections.find(filter)
    .skip(skip)
    .limit(limit)
    .toArray();

  const totalProducts = await ProductCollections.countDocuments(filter);

  res.send({
    data: allProducts,
    totalPages: Math.ceil(totalProducts / limit),
    currentPage: page,
  });
});
