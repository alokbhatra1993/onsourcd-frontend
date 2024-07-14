import React from 'react'
import { useForm } from 'react-hook-form'

const AddQuotation = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // handle form submission
  }


  const closeModal=()=>{
    props.closeModal()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gray-900 bg-opacity-75">
      <div className="relative w-1/2 mx-auto my-6">

        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}

          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
            <h3 className="text-3xl font-semibold">New Quotation</h3>
          </div>
          {/* Body */}
          <div className="relative flex-auto p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex space-between'>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="estimatedPrice">
                  Estimated Price
                </label>
                <input
                  id="estimatedPrice"
                  type="number"
                  {...register('estimatedPrice', { required: true })}
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
                {errors.estimatedPrice && <p className="text-red-500 text-xs italic">Estimated Price is required.</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  GST
                </label>
                <input
                  type="checkbox"
                  {...register('gst')}
                  className="mr-2 leading-tight"
                />
                {/* {errors.gst && <p className="text-red-500 text-xs italic">GST selection is required.</p>} */}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Transport Availability
                </label>
                <input
                  type="checkbox"
                  {...register('transportAvailability')}
                  className="mr-2 leading-tight"
                />
                {/* {errors.transportAvailability && <p className="text-red-500 text-xs italic">Transport Availability selection is required.</p>} */}
              </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="qualityDescription">
                  Quality Description
                </label>
                <textarea
                  id="qualityDescription"
                  {...register('qualityDescription', { required: true })}
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  rows="5"
                ></textarea>
                {errors.qualityDescription && <p className="text-red-500 text-xs italic">Quality Description is required.</p>}
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                <button
                  className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase bg-transparent outline-none focus:outline-none"
                  type="button"
                onClick={closeModal}
                >
                  Close
                </button>
                <button
                  className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase bg-blue-500 rounded shadow hover:bg-blue-700 hover:shadow-lg outline-none focus:outline-none"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
              
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddQuotation
