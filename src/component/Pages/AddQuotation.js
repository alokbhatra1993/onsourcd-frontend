import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { addQuotation, readQuotationByRequirement, readQuotationByRequirementAndUser } from "../../services/api";
import { useSelector } from "react-redux";

const AddQuotation = (props) => {
  const user = useSelector((state) => state);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const [status, setStatus] = useState("")
  console.log({status});


  const onSubmit = async (data) => {
    try {
      const response = await addQuotation(data, user?.token, props?.requirementId);
      console.log({ response });
      if (response?.ok) {
        toast.success("Qutation Updated ")
        // closeModal()
      }
    } catch (error) {
      toast.error("Something went wrong")
      // closeModal()
    }

  };

  const closeModal = () => {
    props.closeModal();
  };

  useEffect(() => {
    loadQuotation()
  }, []);

  const loadQuotation = async () => {
    try {
      const response = await readQuotationByRequirementAndUser(props?.requirementId, user?.token);
      console.log({ response });
      if (response.ok) {
        const data = await response.json()
        console.log({ data });
        setStatus(data[0]?.status)
        setValue("gst", data[0]?.gst)
        setValue("estimatedPrice", data[0]?.estimatedPrice)
        setValue("qualityDescription", data[0]?.qualityDescription)
        setValue("transportAvailability", data[0]?.transportAvailability)
      }
    } catch (error) {
      // toast.error("Something went wrong")
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-75">
      <ToastContainer />
      <div className="relative w-full max-w-lg mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-solid border-gray-200 rounded-t">
            <h3 className="text-lg font-semibold text-gray-700">New Quotation</h3>
            <p className={`text-right font-bold ${status === "pending" ? "text-orange-600" : "text-white"}`}>{status} </p>
            <p className={`text-right font-bold ${status === "accepted" ? "text-green-600" : "text-white"}`}>{status} </p>
            <p className={`text-right font-bold ${status === "rejected" ? "text-red-600" : "text-white"}`}>{status} </p>

            {/* <button
              className="p-1 text-black bg-transparent border-0 text-2xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <FaTimes className="text-black text-lg" />
            </button> */}
          </div>
          {/* Body */}
          <div className="relative flex-auto p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="estimatedPrice">
                  Estimated Price
                </label>
                <input
                  id="estimatedPrice"
                  type="number"
                  {...register("estimatedPrice", { required: true })}
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
                {errors.estimatedPrice && <p className="text-red-500 text-xs italic">Estimated Price is required.</p>}
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="gst"
                    {...register("gst")}
                    className="mr-2 leading-tight"
                  />
                  <label className="text-sm font-bold text-gray-700" htmlFor="gst">GST</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="transportAvailability"
                    {...register("transportAvailability")}
                    className="mr-2 leading-tight"
                  />
                  <label className="text-sm font-bold text-gray-700" htmlFor="transportAvailability">Transport Availability</label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="qualityDescription">
                  Quality Description
                </label>
                <textarea
                  id="qualityDescription"
                  {...register("qualityDescription", { required: true })}
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  rows="4"
                ></textarea>
                {errors.qualityDescription && <p className="text-red-500 text-xs italic">Quality Description is required.</p>}
              </div>
              <div className="flex items-center justify-end p-4 border-t border-solid border-gray-200 rounded-b">
                <button
                  className="px-4 py-2 mb-1 mr-1 text-sm font-bold text-gray-700 uppercase bg-transparent border-0 outline-none focus:outline-none"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
                {
                  !status || status === "pending" ? (
                    <button
                      // disabled={status === "rejected" ? true : false}
                      className="px-4 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase bg-yellow-500 rounded shadow hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Save Changes
                    </button>
                  ) : (
                    <>
                      {
                        status === "accepted" ? (
                            <button  className="px-4 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 rounded shadow focus:outline-none focus:shadow-outline">View Orders</button>
                        ): (
                            <button disabled className = "px-4 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase bg-red-500 rounded shadow focus:outline-none focus:shadow-outline">Closed</button>

                )
                    }
              </>
              )
                }

          </div>
        </form>
      </div>
    </div>
      </div >
    </div >
  );
};

export default AddQuotation;
