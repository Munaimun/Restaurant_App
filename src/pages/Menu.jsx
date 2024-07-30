import dish1 from "../assets/images/dish1.jpeg";
import dish2 from "../assets/images/dish2.jpeg";
import dish3 from "../assets/images/dish3.jpeg";
import dish4 from "../assets/images/dish4.jpeg";
import dish5 from "../assets/images/dish5.jpeg";
import dish6 from "../assets/images/dish6.jpeg";

function Menu() {
  return (
    <section id="menu" className="p-4 bg-gray-100">
      <h2 className="text-3xl text-center font-bold my-4">
        Delight Your Taste Buds with Our Delicious Menu
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* DISH 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish1} alt="Dish 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">
              Butter Nun With Butter Chicken
            </h3>
            <p className="mt-2 text-gray-600">
              <b className="text-red-600">Butter Naan:</b> A soft and fluffy
              flatbread brushed with melted butter, perfect for pairing with
              rich and creamy dishes. <br />
              <b className="text-red-600">Butter Chicken:</b> Tender chicken
              pieces cooked in a creamy tomato-based sauce, infused with
              aromatic spices and finished with a touch of butter for a
              luscious, flavorful experience.
            </p>
            <p className="mt-2 text-red-600 font-bold">$12.99</p>
          </div>
        </div>

        {/* DISH 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish2} alt="Dish 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Complete Set Menu</h3>
            <p className="mt-2 text-gray-600">
              Indulge in a delightful culinary journey with our complete set
              menu, featuring a perfect balance of appetizers, main courses, and
              desserts. Each dish is crafted with fresh ingredients and
              authentic flavors to provide a satisfying and memorable dining
              experience.
            </p>
            <p className="mt-2 text-red-600 font-bold">$10.99</p>
          </div>
        </div>

        {/* DISH 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish3} alt="Dish 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Steak with Mashed Potatoes</h3>
            <p className="mt-2 text-gray-600">
              <b className="text-red-600">Steak:</b> Savor a perfectly cooked
              steak, seasoned to perfection and grilled to your preferred
              doneness. <br />
              <b className="text-red-600">Mashed Potato:</b> Served alongside
              creamy, buttery mashed potatoes that complement the steak with
              their rich texture and flavor.
            </p>
            <p className="mt-2 text-red-600 font-bold">$14.99</p>
          </div>
        </div>

        {/* DISH 4 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish4} alt="Dish 4" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Big Stack Burger</h3>
            <p className="mt-2 text-gray-600">
              <b className="text-red-600">Dive into our Big Stack Burger:</b>{" "}
              featuring two juicy beef patties stacked high with melted cheddar
              cheese, crisp lettuce, ripe tomatoes, pickles, and our special
              sauce—all nestled in a freshly toasted bun. Each bite delivers a
              satisfying burst of flavor and a hearty, mouthwatering experience.
            </p>
            <p className="mt-2 text-red-600 font-bold">$11.99</p>
          </div>
        </div>

        {/* DISH 5 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish5} alt="Dish 5" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Masala Egg Naan Wrap</h3>
            <p className="mt-2 text-gray-600">
              <b className="text-red-600">Masala Egg Naan Wrap:</b> Enjoy a
              flavorful Masala Egg Naan Wrap, where a warm, soft naan is filled
              with spiced, scrambled eggs and a rich, aromatic masala sauce.
              This satisfying dish combines the comforting taste of naan with a
              savory egg filling, perfect for a delicious and hearty meal.
            </p>
            <p className="mt-2 text-red-600 font-bold">$13.99</p>
          </div>
        </div>

        {/* DISH 6 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={dish6} alt="Dish 5" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">Grilled Chicken Delight</h3>
            <p className="mt-2 text-gray-600">
              <b className="text-red-600">Grilled Chicken Delight:</b> Relish
              our Grilled Chicken Delight, featuring tender chicken breasts
              marinated in a blend of herbs and spices, then grilled to
              perfection. Served with a side of fresh vegetables and a zesty
              sauce, this dish offers a juicy, flavorful experience that&apos;s
              both satisfying and wholesome.
            </p>
            <p className="mt-2 text-red-600 font-bold">$13.99</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
