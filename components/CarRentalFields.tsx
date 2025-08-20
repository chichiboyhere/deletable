import Link from "next/link";

const carBrands = [
  { brand: "Toyota Camry", price: "₦120,000/day" },
  { brand: "Toyota Avalon 2013", price: "₦180,000/day" },
  { brand: "Lexus RX350 2017", price: "₦220,000/day" },
  { brand: "Lexus LX 2023", price: "₦300,000/day" },
  { brand: "Toyota Land Cruiser Prado 2023", price: "₦300,000/day" },
  { brand: "Toyota Land Cruiser 2023", price: "₦350,000/day" },
  { brand: "Toyota Hiace", price: "₦250,000 - ₦400,000/day" },
  { brand: "Mercedes Benz G-Wagon", price: "₦1,000,000/day" },
  { brand: "Maybach Luxury Bus", price: "₦1,000,000/day" },
  { brand: "Rollsroyce", price: "₦1,500,000/day" },
  { brand: "Limousine", price: "₦1,500,000/day" },
];

const CarRentalFields = () => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Service Type
        </label>
        <div className="flex flex-col md:flex-row gap-4 mt-1 text-black z-60 font-semibold">
          {["Car Rental", "Airport Pick-Up", "Both"].map((type) => (
            <label key={type} className="flex items-center gap-1">
              <input
                type="radio"
                name="serviceType"
                value={type}
                required
                className="accent-blue-700 font-semibold "
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 justify-between">
          Select Car Brand
        </label>
        <select
          name="carBrand"
          required
          className="w-full border px-3 py-2 rounded dark:text-[#ffffffcf]"
        >
          <option
            value=""
            className="text-black dark:text-[#ffffffcf] dark:bg-gray-700"
          >
            -- Select --
          </option>
          {carBrands.map(({ brand, price }) => (
            <option
              key={brand}
              value={`${brand} - ${price}`}
              className="text-black dark:text-[#ffffffcf] font-semibold dark:bg-gray-700"
            >
              {brand} ({price})
            </option>
          ))}
        </select>
      </div>
      <h2 className="font-semibold mt-4 text-blue-800 ">
        Check out our luxurious car collection in the{" "}
        <Link
          href="/gallery/#carsForHire"
          className="underline underline-offset-4 border-b-3 border-b-blue-600 decoration-blue-600"
        >
          gallery
        </Link>
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            name="startDate"
            type="date"
            required
            className="w-full border px-3 py-2 rounded text-blue-900"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            name="endDate"
            type="date"
            required
            className="w-full border px-3 py-2 rounded text-blue-900"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
      </div>
    </>
  );
};

export default CarRentalFields;
