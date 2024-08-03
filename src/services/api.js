export const fetchCategories = async () => {
  const response = await fetch(
    `https://onsourcd-backend.vercel.app/api/products/categories`,
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
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/products/category`, {
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
    `https://onsourcd-backend.vercel.app/api/products/subcategory`,
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
    `https://onsourcd-backend.vercel.app/api/products/subcategories-by-categoryId?category=${categoryId}`,
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
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/products/`, {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
    },
    body: formData,
  });
  return response;
};

export const addRequirement = async (formData, token) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/requirments/`, {
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
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/requirments/my-requirements`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
  });
  return response;
};

export const fetchNewRequirements = async (token) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/requirments`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
  });
  return response;
};

export const fetchProductApi = async () => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/products/`, {
    method: "GET",
    headers: {
      // "Content-Type": "application/json",
    },
  });
  return response;
};

export const sendVerifyEmail = async (token) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/users/send-verify-email`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const verifyEmailApi = async (token) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/users/verify-email`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};


export const saveCompanyDetails = async (formData, token) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/company/register`, {
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
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/company/details`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const addQuotation = async (formData, token, requirementId) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/${requirementId}`, {
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
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/user-requirement/${requirementID}`, {
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
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/requirement/${requirementID}`, {
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


export const acceptOrderApi = async (quotationId, token) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/accept-order/${quotationId}`, {
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


export const ordersByRequirementId = async (requirementID, token) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/requirement-orders/${requirementID}`, {
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

export const ordersByQuotation = async (requirementID, token) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/quotation-orders/${requirementID}`, {
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

export const allOrdersApi = async () => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/admin/orders`, {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formData),
  }
  );
  return response;
};

export const fetchSellers = async () => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/users/sellers`, {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
  });
  return response;
};

export const fetchBuyers = async () => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/users/buyers`, {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
  });
  return response;
};

// return only those which payment received

export const fetchOrdersBySeller = async (token, sellerId) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/seller/orders/${sellerId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
  });
  return response;
};



export const updateOrderPayment = async (token, orderId) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/update/order-payment/${orderId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
    // body: JSON.stringify({ paymentProgress }),

  });
  return response;
};

export const updateOrderStatus= async (token, orderId ,status) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/update/order-status/${orderId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),

  });
  return response;
};

export const getAllQuotations = async (token) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
    // body: JSON.stringify({ paymentProgress }),

  });
  return response;
};

export const deleteProductApi = async (token, productID) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/products/delete/${productID}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      // "Content-Type": "application/json",
    },
    // body: JSON.stringify({ paymentProgress }),

  });
  return response;
};


export const fetchOrdersByBuyer= async (token, buyerId) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation/buyer/orders/${buyerId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const allQuotationsApi= async ( ) => {
  const response = await fetch(`https://onsourcd-backend.vercel.app/api/quotation`, {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(formData),
  }
  );
  return response;
};
