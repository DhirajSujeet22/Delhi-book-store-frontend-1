import { useLocation } from "react-router-dom"; // To access the URL query params

const ProductSwiper = ({ categoriesData, productToCategoryData, productsData }) => {
  const location = useLocation();

  // Helper function to get the subcategory from the query params
  const getSubCategoryId = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("subCategory");
  };

  const subCategoryId = getSubCategoryId();

  // Filter products based on subcategory ID
  const filteredProducts = subCategoryId
    ? productToCategoryData
        .filter((item) => item.categories_id === subCategoryId) // Find matching products
        .map((item) =>
          productsData.find((product) => product.products_id === item.products_id) // Get product details
        )
    : [];

  return (
    <Swiper>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <ItemCard image={item.imageUrl} title={item.title} />
          </SwiperSlide>
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
    </Swiper>
  );
};

export default ProductSwiper;
