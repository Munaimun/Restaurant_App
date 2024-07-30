import chef from "../assets/images/chef.jpeg";

function About() {
  return (
    <section id="about" className="p-4 bg-gray-100">
      <h2 className="text-3xl text-center font-bold my-4">About Us</h2>

      {/* Restaurant History */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl text-red-600 font-semibold mb-2">Our Story</h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Founded in 2010, our restaurant has been a beloved destination for
          food enthusiasts seeking a unique dining experience. With a passion
          for culinary excellence, we started with a simple vision: to create a
          place where guests could enjoy a delightful meal made from the finest
          ingredients. Over the years, we&apos;ve grown and evolved, but our
          commitment to quality and service remains unchanged.
        </p>
      </div>

      {/* Why Visit Us */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl text-red-600 font-semibold mb-2">
          Why You Should Visit Us
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our restaurant is not just a place to eat; it&apos;s a destination for
          memorable moments. We take pride in offering an extensive menu that
          caters to diverse tastes, from classic favorites to innovative dishes.
          Our inviting atmosphere and attentive staff ensure that every visit is
          special, whether you&apos;re here for a casual meal or a celebratory
          event. We also offer exclusive specials and promotions to make your
          dining experience even more enjoyable.
        </p>
      </div>

      {/* Our Chefs */}
      <div className="text-center">
        <h3 className="text-2xl text-red-600 font-semibold mb-2">
          Meet Our Chefs
        </h3>
        <div className="flex flex-col items-center mb-6">
          <img
            src={chef}
            alt="Our Head Chef"
            className="w-48 h-48 object-cover rounded-full mb-4 shadow-lg"
          />
          <p className="text-gray-700 max-w-3xl mx-auto">
            At the heart of our restaurant are our talented chefs who bring
            creativity and expertise to every dish. With years of experience and
            a deep passion for cooking, they craft each meal with care and
            precision. Our head chef, John Doe, has been a culinary artist for
            over 15 years, and his innovative approach to traditional recipes
            has earned him acclaim in the culinary world. Together with our
            dedicated kitchen team, they ensure that every dish not only tastes
            amazing but also tells a story of flavor and tradition.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
