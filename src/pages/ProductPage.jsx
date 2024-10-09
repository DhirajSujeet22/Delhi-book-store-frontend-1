import React, { useEffect, useState } from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import SubCategorySwiper from "../components/swiper/SubCategorySwiper";
import categoryService from "../services/category.service";
import productService from "../services/product.service";
import ItemCard from "../components/cards/ItemCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Pagination from "../components/Pagination";
import SidebarCategory from "../components/category/SidebarCategory";

const ProductPage = () => {
  const pathname = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 6;
  const [category, setCategory] = useState([]);
  const [parentCategory, setParentCategory] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchCategories = async () => {
    console.log("Fetching categories for", pathname.id);

    try {
      const response = await categoryService.getAllChild(
        pathname.id,
        limit,
        offset
      );
      if (response.data.result) {
        const newCategories = response.data.result.child;
        setParentCategory(response.data.result.parent);

        setCategory(newCategories);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  };

  const fetchMoreCategories = async () => {
    if (loading || !hasMore) return; // Prevent further fetching if already loading or no more data

    console.log("Fetching more categories for", pathname.id);
    setLoading(true);

    try {
      const response = await categoryService.getAllChild(
        pathname.id,
        limit,
        offset
      );
      if (response.data.result) {
        const newCategories = response.data.result.child;
        setCategory((prev) => [...prev, ...newCategories]);
        setLoading(false);

        // Increment offset for the next batch
        setOffset((prevOffset) => prevOffset + limit);

        // If fewer than limit items are returned, stop further fetching
        if (newCategories.length < limit) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error fetching more categories:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(); // Fetch the first batch on mount
  }, []);

  // Infinite scrolling: Fetch more categories when scrolling to the bottom
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      hasMore
    ) {
      fetchMoreCategories(); // Fetch additional categories when scrolling near the bottom
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, offset]);

  const [productsLoading, setProductsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productPage, setProductPage] = useState(1);
  const productLimit = 12;
  const [totalProductCount, setTotalProductCount] = useState(0);

  const fetchProducts = async () => {
    setProductsLoading(true);
    setProducts([]);

    try {
      const response = await productService.getProductsByCategory(
        pathname.id,
        productLimit,
        productPage
      );
      setProducts(response.data.result.data);
      setTotalProductCount(response.data.result.totalCount);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setProductsLoading(false);
    }
  };

  const totalPages = Math.ceil(totalProductCount / productLimit);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setProductPage(newPage);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [productPage, pathname]);

  return (
    <div className=" w-full h-full grid grid-cols-12">
      {!loading && (
        <div className=" lg:flex flex-col hidden col-span-2  pl-2 py-4 border-r border-solid h-full  ">
          <SidebarCategory />
        </div>
      )}
      <div className="  col-span-12 lg:col-span-10  px-5 pb-4 flex flex-col">
        {!loading && (
          <>
            <h1 className=" font-semibold text-2xl my-4 ">
              {" "}
              {parentCategory.categories_name.charAt(0).toUpperCase() +
                parentCategory.categories_name.slice(1).toLowerCase()}
            </h1>
            <SubCategorySwiper
              offset={offset}
              setOffset={setOffset}
              data={category}
              id={pathname.id}
              loading={loading}
              setLoading={setLoading}
              limit={limit}
            />
          </>
        )}

        {!productsLoading && (
          // <InfiniteScroll
          //   className=" my-4 grid grid-cols-10 gap-5 col-span-12 lg:col-span-12 "
          //   dataLength={products.length}
          //   next={fetchMoreProducts}
          //   hasMore={true}
          //   loader={<h4>Loading...</h4>}
          // >
          //   {products.map((pro, index) => (
          //     <div key={index} className=" w-full col-span-2 ">
          //       {" "}
          //       <ItemCard
          //         title={pro.products_name}
          //         image={`https://covers.openlibrary.org/b/isbn/${pro.products_code}-L.jpg`}
          //       />
          //     </div>
          //   ))}
          // </InfiniteScroll>
          <div className=" my-4 grid grid-cols-10 gap-5 col-span-12 lg:col-span-12 ">
            {products.map((pro, index) => (
              <div key={index} className=" w-full col-span-2 ">
                {" "}
                <ItemCard
                  title={pro.products_name}
                  image={`https://covers.openlibrary.org/b/isbn/${pro.products_code}-L.jpg`}
                  isbn={pro.products_code}
                />
              </div>
            ))}
          </div>
        )}
        <Pagination
          handlePageChange={handlePageChange}
          page={productPage}
          totalPages={totalProductCount}
        />
      </div>
    </div>
  );
};

export default ProductPage;
