import React from 'react';

const InfringementPolicy = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-left">Infringement Policy</h1>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
        <p className="text-gray-700 leading-relaxed mb-4">
          OnSourcd is dedicated to eliminating infringing products from its platform. To facilitate this, OnSourcd has established an Infringement Verification process so that intellectual property owners can easily report listings that infringe upon their rights. It is in OnSourcd best interest to ensure that infringing products are swiftly removed from its platform, as they undermine Buyer and Seller confidence.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-left">Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          OnSourcd respects third-party Intellectual Property rights and actively advocates for the protection of all third-party Intellectual Property, including Copyrights and Trademarks ("IP"). Our policy is to promptly respond to clear notices of alleged IP infringement.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If we receive proper notification of IP infringement, our response to such notices will include removing or disabling access to material claimed to be the subject of infringing activity.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-left">How to report a listing</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have a good faith belief that your IP rights have been infringed by any of our buyers or sellers, you may follow the below process: We require that the Intellectual Property right owner or authorized agent provide the following details and email it to support@onsourcd.com. The email should contain the below information.
        </p>

        <ul className="list-disc list-inside ml-6 text-gray-700 mb-4">
          <li>Identification or description of the copyrighted work/trademark that has been infringed.</li>
          <li>
            Clear identification or description of where the material that you claim is infringing is located on the App with adequate particulars. Product ID or Product Name of infringing products or snapshots (in case of copyright infringement)
            <br />
            (Note: OnSourcd is unable to process requests which do not specify exact product IDs or Product Names).
          </li>
          <li>Your address, telephone number, and email address.</li>
          <li>
            A statement by you that you have a good faith belief that the use of the material complained of is not authorized by the copyright or intellectual property owner, its agent, or the law.
          </li>
          <li>
            A statement by you, that the information in your notice is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner's behalf.
          </li>
          <li>Brand Name (in case of Trademark infringement)</li>
          <li>Details of the intellectual property being infringed (Provide copyrighted images or trademark certificates as attachments)</li>
        </ul>

        <p className="text-gray-700 leading-relaxed">
          Upon receipt of a proper notice with requisite documents as stated above, OnSourcd may promptly remove/cause to remove and/or disable or cause to disable the alleged infringing content hosted by third parties. We will also notify the relevant seller who submitted the allegedly infringing material and provide them with a copy of the copyright infringement notice. We retain the right to take appropriate actions according to applicable law of the land at the relevant point of time of notification. Any previous removal or disabling at an earlier occasion shall not preclude us from asserting an action contrary to such earlier removal or disabling.
        </p>
      </section>
    </div>
  );
}

export default InfringementPolicy;
