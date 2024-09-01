import React from "react";

const AboutPage = () => {
  return (
    <div className="container px-4 md:py-10 text-pretty pb-24">
      <h1 className="text-lg font-medium pb-3">About LeezoBD</h1>
      <p>
        Welcome to LeezoBD, your one-stop online shopping destination in
        Bangladesh. At LeezoBD, we strive to provide our customers with a
        seamless and enjoyable shopping experience, offering a wide range of
        high-quality products at competitive prices.
      </p>
      <h1 className="text-lg font-medium py-3">Our Mission</h1>
      <p>
        Our mission is to make online shopping convenient, affordable, and
        accessible to everyone in Bangladesh. We aim to bring the best products
        from around the world to your doorstep, ensuring you have access to the
        latest trends and innovations.
      </p>
      <h1 className="text-lg font-medium py-3">Why Shop With Us?</h1>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          Wide Range of Products: From fashion and electronics to home
          essentials and beauty products, we offer a diverse selection to cater
          to all your needs.
        </li>
        <li>
          Quality Assurance: We are committed to providing only the highest
          quality products. Each item is carefully selected and inspected to
          meet our stringent quality standards.
        </li>
        <li>
          Affordable Prices: Enjoy great value for your money with our
          competitive pricing and regular discounts and promotions.
        </li>

        <li>
          Customer Satisfaction: Your satisfaction is our top priority. Our
          dedicated customer support team is always ready to assist you with any
          queries or concerns.
        </li>
        <li>
          Fast & Reliable Delivery: We understand the importance of timely
          delivery. Our efficient logistics network ensures that your orders
          reach you quickly and safely.
        </li>
      </ol>
      <h1 className="text-lg text-center md:text-left pb-3 pt-5">Thank you for choosing LeezoBD. Happy shopping!</h1>

    </div>
  );
};

export default AboutPage;
