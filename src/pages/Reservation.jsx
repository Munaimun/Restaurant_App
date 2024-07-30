import { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   alert("Reservation request submitted!");
  // };

  return (
    <section id="reservation" className="p-8 bg-gray-100">
      <h2 className="text-3xl text-center font-bold my-4">
        Make a Reservation
      </h2>

      <div className="text-center mb-8">
        <p className="text-gray-700">
          We recommend making a reservation to ensure you have a table ready for
          your visit. Please fill out the form below to book your spot.
        </p>
      </div>

      <form
        // onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 font-semibold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-gray-700 font-semibold mb-2"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label
              htmlFor="guests"
              className="block text-gray-700 font-semibold mb-2"
            >
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              min="1"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="specialRequests"
              className="block text-gray-700 font-semibold mb-2"
            >
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-red-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Submit Reservation
          </button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="text-center mt-8">
        <p className="text-gray-700 mb-2">
          For any immediate inquiries, you can also reach us at:
        </p>
        <p className="text-gray-700">
          Email: oebic@restaurant.com | Phone: +123 456-7890
        </p>
      </div>
    </section>
  );
}

export default Reservation;
