import React from "react";
import Swal from "sweetalert2";

const Update = ({ updateCarInfo, setReRender }) => {
  const {
    availability,
    price,
    model,
    image,
    registration,
    features,
    location,
    description,
    _id,
  } = updateCarInfo;
  const handleUpdate = (e) => {
    document.getElementById("my_modal_5").close();
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateData = Object.fromEntries(formData.entries());  
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://jaitam-backend.vercel.app/myCars/${_id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updateData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              setReRender((prev) => !prev);
              Swal.fire("Saved!", "", "success");
            }
          });       
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle py-6 z-1">
      <div className="modal-box bg-white rounded-2xl shadow-xl max-w-2xl w-full ">
        {/* Header */}
        <div className="bg-indigo-600 px-6 py-4 rounded-t-2xl ">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Update Car Info
            </h2>
          </div>
        </div>

        {/* Form Body */}
        <form
          onSubmit={handleUpdate}
          method="dialog"
          className="border border-amber-200 rounded-xl my-2 p-6 space-y-6 overflow-y-auto max-h-[65vh] "
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-500 text-sm font-medium">
                Car Model
              </label>
              <input
                name="model"
                type="text"
                defaultValue={model}
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div>
              <label className="text-slate-500 text-sm font-medium">
                Daily Rental Price
              </label>
              <input
                name="price"
                type="number"
                defaultValue={price}
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div>
              <label className="text-slate-500 text-sm font-medium">
                Availability
              </label>
              <select
                name="availability"
                defaultValue={availability}
                className="select select-bordered w-full mt-2"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
            <div>
              <label className="text-slate-500 text-sm font-medium">
                Registration Number
              </label>
              <input
                name="registration"
                type="text"
                defaultValue={registration}
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div>
              <label className="text-slate-500 text-sm font-medium">
                Features
              </label>
              <input
                name="features"
                type="text"
                defaultValue={features}
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div>
              <label className="text-slate-500 text-sm font-medium">
                Location
              </label>
              <input
                name="location"
                type="text"
                defaultValue={location}
                className="input input-bordered w-full mt-2"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-slate-500 text-sm font-medium">
                Description
              </label>
              <textarea
                name="description"
                rows="3"
                defaultValue={description}
                className="textarea textarea-bordered w-full mt-2"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label className="text-slate-500 text-sm font-medium">
                Image URL
              </label>
              <input
                name="image"
                type="url"
                defaultValue={image}
                className="input input-bordered w-full mt-2"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Update
            </button>
            <button
              type="button"
              className="btn bg-amber-700 hover:bg-amber-600 text-white"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              Close
            </button>
          </div>
        </form>
      </div>
       </dialog>
  );
};

export default Update;
