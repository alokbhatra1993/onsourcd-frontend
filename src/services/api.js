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
  // console.log("ADD PRODUTC API" , formData);
  const response = await fetch(`http://localhost:5000/api/products/`, {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
    },
    body: formData,
  });
  return response;
};

export const addRequirement = async (formData, token) => {
  const response = await fetch(`http://localhost:5000/api/requirments/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return response;
};

export const fetchMyRequirements = async (token) => {
  const response = await fetch(`http://localhost:5000/api/requirments/my-requirements`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
  });
  return response;
};

export const fetchNewRequirements = async (token) => {
  const response = await fetch(`http://localhost:5000/api/requirments`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
  });
  return response;
};

export const fetchProductApi = async () => {
  const response = await fetch(`http://localhost:5000/api/products/`, {
    method: "GET",
    headers: {
      // "Content-Type": "application/json",
    },
  });
  return response;
};

export const sendVerifyEmail = async (token) => {
  const response = await fetch(`http://localhost:5000/api/users/send-verify-email`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const verifyEmailApi = async (token) => {
  const response = await fetch(`http://localhost:5000/api/users/verify-email`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};


export const saveCompanyDetails = async (formData, token) => {
  const response = await fetch(`http://localhost:5000/api/company/register`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }

  );
  return response;
};

export const getCompanyDetails = async (token) => {
  const response = await fetch(`http://localhost:5000/api/company/details`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const addQuotation = async (formData, token, requirementId) => {
  const response = await fetch(`http://localhost:5000/api/quotation/${requirementId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
  );
  return response;
};

export const readQuotationByRequirementAndUser = async (requirementID, token) => {
  const response = await fetch(`http://localhost:5000/api/quotation/user-requirement/${requirementID}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formData),
  }
  );
  return response;
};

export const readQuotationByRequirement = async (requirementID, token) => {
  const response = await fetch(`http://localhost:5000/api/quotation/requirement/${requirementID}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formData),
  }
  );
  return response;
};