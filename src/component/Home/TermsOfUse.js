import React from 'react';
import { Link } from 'react-router-dom';
import UndeliveredShipment from './UndeliveredShipment';

const TermsOfUse = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-left">Terms of Use</h1>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-left">Understand Our Guidelines and Agreements</h2>
        <p className="text-gray-700 leading-relaxed">
          Please read these website terms of use carefully before using this website (referred to as 'www.onsourcd.com'). These terms of use govern your access to and use of the website. You may use the website only if you agree to these terms. If you do not agree to all the terms of use, you should not access or use the website. By accessing or using the website, you and the entity you represent (referred to as 'you' or 'your') agree to be bound by these terms of use.
        </p>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-left">User Eligibility</h2>
        <p className="text-gray-700 leading-relaxed">
          The Website is provided by OnSourcd and available only to entities and persons who have reached the age of legal majority and are competent to enter into a legally binding agreement(s) under the applicable laws. If You do not qualify, you are not permitted to use the Web Site.
        </p>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-left">Scope of Terms of Use</h2>
        <p className="text-gray-700 leading-relaxed">
          These Terms of Use govern your use of the Website and all applications, software and services (collectively known as "Services'') available via the Web Site, except to the extent that such Services are the subject of a separate agreement. Specific terms or agreements may apply to the use of certain Services and other items provided to You via the Web Site ("Service Agreement(s)"). Any such Service Agreements will accompany the applicable Services or are listed in association therewith or via a hyperlink associated therewith.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          You may also review our additional policies:
        </p>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          <li>
            <Link to="/undeliveredshipment" className="text-blue-600 underline">Undelivered Shipment Protocol</Link>
          </li>
          <li>
            <Link to="/returnshipments" className="text-blue-600 underline">Return Shipments Policy</Link>
          </li>
          <li>
            <Link to="/productlistingpolicy" className="text-blue-600 underline">Product Listing Policy</Link>
          </li>
          <li>
            <Link to="/infringementpolicy" className="text-blue-600 underline">Infringement Policy</Link>
          </li>
        </ul>
      </section>

      {/* Additional sections can remain as they are */}
    </div>
  );
}

export default TermsOfUse;
