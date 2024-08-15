import { AutoComplete } from "rsuite";
const products = [
  // Tech
  "Baseus Encok Type-C lateral in-ear Wired Earphone C17 White",
  "Samsung Galaxy Watch 4",
  "Dell XPS 13 Laptop",
  "Canon EOS R5 Mirrorless Camera",
  "Logitech G502 Hero Gaming Mouse",
  "Apple iPhone 13 Pro Max",

  // Clothing
  "Nike Air Max 270 Sneakers",
  "Adidas Originals Trefoil Hoodie",
  "Levi's 501 Original Fit Jeans",
  "Patagonia Better Sweater Fleece Jacket",
  "Lululemon Align Leggings",
  "The North Face Borealis Backpack",

  // Gadgets
  "Amazon Kindle Paperwhite",
  "Tile Pro Bluetooth Tracker",
  "Anker PowerCore 10000 Portable Charger",
  "GoPro HERO9 Black Action Camera",
  "Raspberry Pi 4 Model B",
  "Fitbit Charge 5 Fitness Tracker",

  // Home Appliances
  "Instant Pot Duo 6-Quart Pressure Cooker",
  "Roomba i7+ Robot Vacuum",
  "Nespresso Vertuo Coffee and Espresso Machine",
  "Dyson V11 Torque Drive Cordless Vacuum",
  "Phillips Hue White and Color Ambiance Starter Kit",
  "Samsung SmartThings Hub",
];

const SearchBox = () => {
  return (
    <>
      <div className="hidden lg:flex w-[70%] flex-col gap-2 items-center">
        <div className="bg-white w-full flex items-center rounded-lg border hover:border-[#F4580E] transition-all duration-300">
          <AutoComplete
            data={products}
            placeholder="Search in Leezo"
            className="border-0 shadow-none z-[999999999999] h-auto"
            style={{ width: "100%" }}
          />
          <button className="bg-[#F4580E] border-2 border-[#F4580E] text-white p-2 rounded-r-lg overflow-hidden px-8">
            Search
          </button>
        </div>
      </div>

      <div className="lg:hidden bg-white w-full py-1 flex items-center">
        <div className="bg-white w-full group flex items-center rounded-lg border hover:border-[#F4580E] transition-all duration-300">
          <AutoComplete
            data={products}
            placeholder="Search in Leezo"
            className="border-0 shadow-none z-[999999999999] h-auto"
            style={{ width: "100%" }}
          />
          <button className="bg-black border-2 border-black text-white p-2 rounded-r-lg overflow-hidden px-8 group-hover:border-[#000000] transition-all duration-300">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
