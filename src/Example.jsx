import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllProducts = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allProducts", page, searchTerm, brand, category, priceRange],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/allProducts`, {
        params: {
          page,
          limit: 9,
          search: searchTerm,
          brand,
          category,
          priceRange,
        },
      });
      return res.data;
    },
    keepPreviousData: true,
  });

  useEffect(() => {
    setPage(1);
  }, [searchTerm, brand, category, priceRange]);

  useEffect(() => {
    refetch();
  }, [page, searchTerm, brand, category, priceRange, refetch]);

  if (isLoading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const allProducts = data?.data || [];
  const totalPages = data?.totalPages || 1;

  return (
    <div className="py-10 px-3 lg:px-0">
      <h2 className="text-2xl font-bold text-center mb-10">All Products</h2>

      {/* Filter Options */}
      <div className="mb-6 flex justify-center gap-10">
        <input
          type="text"
          placeholder="Search by Product Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered mb-4"
        />

        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="select mb-4 border-2 border-gray-200"
        >
          <option value="">Select Brand</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Asus">Asus</option>
          <option value="Apple">Apple</option>
          <option value="Google">Google</option>
          <option value="Dell">Dell</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select mb-4 border-2 border-gray-200"
        >
          <option value="">Select Category</option>
          <option value="Laptops">Laptop</option>
          <option value="Smartphones">Smartphone</option>
          <option value="Cameras">Camera</option>
          <option value="Headphones">Headphone</option>
        </select>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="select border-2 border-gray-200"
        >
          <option value="">Select Price Range</option>
          <option value="0-100">0 - 100</option>
          <option value="100-200">100 - 200</option>
          <option value="200-500">200 - 500</option>
          <option value="500-1000">500 - 1000</option>
          <option value="1000-2000">1000 - 2000</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProducts?.map((product, idx) => (
          <div className="w-full" key={idx}>
            <div className="card card-compact bg-base-100 shadow-2xl min-h-[550px]">
              <figure>
                <img
                  className="w-full"
                  src={product?.ProductImage}
                  alt={product?.ProductName}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.ProductName}</h2>
                <p>{product.Description}</p>
                <div className="flex justify-between items-center my-5">
                  <p>
                    <span className="text-md font-semibold pr-2">Price:</span>$
                    {product.Price}
                  </p>
                  <p>
                    <span className="text-md font-semibold pr-2">
                      Category:
                    </span>
                    {product.Category}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-5">
                  <p>
                    <span className="text-md font-semibold pr-2">Rating:</span>
                    {product.Ratings}
                  </p>
                  <p>
                    <span className="text-md font-semibold pr-2">Date:</span>
                    {product.ProductCreationDate}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          className="btn btn-secondary mr-4"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (item, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`md:btn mx-1 ${
                page === pageNumber ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          className="btn btn-secondary"
          onClick={() =>
            setPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
