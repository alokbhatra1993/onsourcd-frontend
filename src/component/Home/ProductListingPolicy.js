import React from 'react';

const ProductListingPolicy = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-left">Product Listing Policy</h1>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          At OnSourcd, we are committed to providing a platform that fosters responsible and sustainable practices within the waste management sector. To ensure the quality, safety, and reliability of products listed on our platform, we have established the following product listing policy:
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-left">1. Eligibility Criteria:</h2>
        <ul className="list-disc list-inside ml-6 text-gray-700 mb-4">
          <li>Products listed on OnSourcd must be directly or indirectly related to agricultural waste, industrial waste including but not limited to equipment, machinery, technologies, and services.</li>
          <li>Products must comply with all relevant local, national, and international regulations and standards.</li>
          <li>Only authorized sellers are permitted to list products on our platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-left">2. Product Quality and Safety:</h2>
        <ul className="list-disc list-inside ml-6 text-gray-700 mb-4">
          <li>Sellers are responsible for ensuring the quality and safety of their products. Products must meet industry standards and best practices (Provide a lab testing report for any claimed figures).</li>
          <li>Products must not pose any health or safety risks to users, consumers, or the environment.</li>
          <li>Sellers must provide accurate and comprehensive product descriptions, including information on materials used, technical specifications, manufacturing processes, and any potential hazards.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-left">3. Accuracy and Authenticity:</h2>
        <ul className="list-disc list-inside ml-6 text-gray-700 mb-4">
          <li>Product listings must accurately represent the features, specifications, and functionalities of the product.</li>
          <li>Any claims made about the product, such as performance capabilities or environmental benefits, must be truthful and supported by evidence.</li>
          <li>Sellers must not use deceptive or misleading tactics to promote their products.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-left">4. Prohibited Products:</h2>
        <ul className="list-disc list-inside ml-6 text-gray-700 mb-4">
          <li>The following types of products are prohibited from being listed on OnSourcd:</li>
          <ul className="list-disc list-inside ml-6 text-gray-700 mb-4">
            <li>Products that are illegal or promote illegal activities.</li>
            <li>Products that are discriminatory, offensive, or inappropriate.</li>
            <li>Products that are hazardous, toxic, or harmful to humans, animals, or the environment.</li>
            <li>Products that infringe upon the rights of others or violate any laws or regulations.</li>
          </ul>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-left">5. Compliance and Enforcement:</h2>
        <ul className="list-disc list-inside ml-6 text-gray-700 mb-4">
          <li>OnSourcd reserves the right to review, approve, modify, or remove any product listings that violate our policies or standards.</li>
          <li>Sellers who repeatedly violate our policies may face account suspension or termination.</li>
          <li>Users are encouraged to report any suspicious or inappropriate listings to our support team for investigation.</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mb-4">
          By listing products on OnSourcd, sellers agree to comply with our product listing policy and all other terms and conditions outlined in our seller agreement. We are committed to maintaining a safe, transparent, and trustworthy marketplace for our users and partners.
        </p>

        <p className="text-gray-700 leading-relaxed">
          For any questions or concerns regarding our product listing policy, please contact our support team at <a href="mailto:support@onsourcd.com" className="text-blue-600 underline">support@onsourcd.com</a>.
        </p>
      </section>
    </div>
  );
}

export default ProductListingPolicy;
