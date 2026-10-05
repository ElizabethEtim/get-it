const API_BASE_URL = "YOUR_BACKEND_API_URL";

const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
};

export const getItems = () => request(`${API_BASE_URL}/items`);

export const getItemById = (id) => request(`${API_BASE_URL}/items/${id}`);

export const createItem = (formData) => request(`${API_BASE_URL}/items`, {
  method: "POST",
  body: formData
});

export const deleteItem = (id) => request(`${API_BASE_URL}/items/${id}`, {
  method: "DELETE"
});
