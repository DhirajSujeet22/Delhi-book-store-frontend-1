import apiClient from "../config/apiClient";

class CategoryService {
  route = "/category";

  getAll = async (data) => {
    return apiClient.post(`${this.route}`, data);
  };
  getAllParent = async () => {
    return apiClient.get(`${this.route}/parent`);
  };
  getAllChild = async (id, limit, offset) => {
    return apiClient.get(
      `${this.route}/child/${id}?limit=${limit}&offset=${offset}`
    );
  };
  getHierarchy = async (id) => {
    return apiClient.get(`${this.route}/hierarchy/${id}`);
  };
}

export default new CategoryService();
