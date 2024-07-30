import { Link } from "react-router-dom";

import dish1 from "../assets/images/dish1.jpeg";
import dish4 from "../assets/images/dish4.jpeg";
import restaurant from "../assets/images/restaurant.jpeg";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-screen text-white flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${restaurant})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-lg mb-6">
            &quot;Good food is the foundation of genuine happiness.&quot;
          </p>
          <p className="text-md mb-6">
            Indulge in our handcrafted dishes made with the freshest
            ingredients. Whether you&apos;re here for a quick bite or a special
            occasion, we promise a memorable dining experience.
          </p>
          <Link
            to="/menu"
            className="bg-red-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <section className="p-8 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Exclusive Offers</h2>
        <p className="text-lg mb-4">
          Enjoy our special offers for a limited time only!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="bg-white text-red-600 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Happy Hour Special</h3>
            <p>20% off on all appetizers from 4 PM to 6 PM.</p>
          </div>
          <div className="bg-white text-red-600 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Family Feast Deal</h3>
            <p>Get a free dessert with every family meal package.</p>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="menu" className="p-4 bg-gray-100">
        <h2 className="text-3xl text-center font-bold my-4">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* DISH 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={dish1}
              alt="Butter Naan with Butter Chicken"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">
                Butter Naan with Butter Chicken
              </h3>
              <p className="mt-2 text-gray-600">
                A soft and fluffy flatbread paired with tender chicken in a
                creamy tomato-based sauce, perfect for a rich and flavorful
                meal.
              </p>
              <p className="mt-2 text-red-600 font-bold">$12.99</p>
            </div>
          </div>

          {/* DISH 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={dish4}
              alt="Big Stack Burger"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Big Stack Burger</h3>
              <p className="mt-2 text-gray-600">
                Two juicy beef patties with melted cheddar, lettuce, tomatoes,
                pickles, and our special sauce, all in a freshly toasted bun.
              </p>
              <p className="mt-2 text-red-600 font-bold">$11.99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
