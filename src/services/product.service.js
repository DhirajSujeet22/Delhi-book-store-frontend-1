import apiClient from "../config/apiClient";

class ProductService {
  route = "/products";

  getProductsByCategory = async (id, limit, page) => {
    return apiClient.get(
      `${this.route}/filter?category=${id}&limit${limit}&page=${page}`
    );
  };
}

export default new ProductService();
