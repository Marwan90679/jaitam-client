import React, { useState } from "react";

// Utility to format date as DD/MM/YYYY
const formatDate = (dateInput) => {
  const date = new Date(dateInput);
  return date.toLocaleDateString("en-GB");
};

const DateModal = ({ bookingId }) => {
  const today = new Date();

  // Format default values
  const defaultStartDate = new Date(today);
  const defaultEndDate = new Date(today);
  defaultEndDate.setDate(defaultEndDate.getDate() + 1);

  const [startDate, setStartDate] = useState(defaultStartDate.toISOString().split("T")[0]);
  const [endDate, setEndDate] = useState(defaultEndDate.toISOString().split("T")[0]);
  const [days, setDays] = useState(1);

  const calculateDays = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const diff = e - s;
    const total = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return total > 0 ? total : 0;
  };

  const handleStartChange = (e) => {
    const value = e.target.value;
    setStartDate(value);

    const currentEnd = new Date(endDate);
    const newStart = new Date(value);

    // Reset end date if it's before new start
    if (newStart >= currentEnd) {
      const nextDay = new Date(newStart);
      nextDay.setDate(nextDay.getDate() + 1);
      setEndDate(nextDay.toISOString().split("T")[0]);
      setDays(1);
    } else {
      setDays(calculateDays(value, endDate));
    }
  };

  const handleEndChange = (e) => {
    const value = e.target.value;
    setEndDate(value);
    setDays(calculateDays(startDate, value));
  };

  const handleConfirm = async () => {
    const formattedStart = formatDate(startDate);
    const formattedEnd = formatDate(endDate);

    const dataToSend = {
      startDate: formattedStart,
      endDate: formattedEnd,
      days,
    };

    try {
      await fetch(`https://jaitam-backend.vercel.app/pick-date?id=${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
    } catch (error) {
      console.error("Error updating dates:", error);
    }
  };

  const minEndDate = new Date(startDate);
  minEndDate.setDate(minEndDate.getDate() + 1);

  return (
    <dialog id="date_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-xl">
        <h3 className="text-xl font-bold mb-4 text-center">Select Dates</h3>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <label className="font-medium block mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={handleStartChange}
              min={new Date().toISOString().split("T")[0]}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex-1">
            <label className="font-medium block mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={handleEndChange}
              min={minEndDate.toISOString().split("T")[0]}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <p className="text-center mt-4 font-semibold">
          Duration: <span className="text-blue-600">{days}</span> day(s)
        </p>

        <div className="modal-action mt-6">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
          <button className="btn btn-primary" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DateModal;
