export const fetchCategories = async () => {
  const response = await fetch(
    `http://localhost:5000/api/products/categories`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const addCategories = async (name) => {
  const response = await fetch(`http://localhost:5000/api/products/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  return response;
};

export const addSubCategories = async (name, categoryId) => {
  const response = await fetch(
    `http://localhost:5000/api/products/subcategory`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, categoryId }),
    }
  );
  return response;
};

export const fetchSubCategories = async (categoryId) => {
  const response = await fetch(
    `http://localhost:5000/api/products/subcategories-by-categoryId?category=${categoryId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const addProductApi = async (formData) => {
  const response = await fetch(
    `http://localhost:5000/api/products/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );
  return response;
};