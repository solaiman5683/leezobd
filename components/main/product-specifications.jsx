"use client";
import { Breadcrumb } from "keep-react";
import Link from "next/link";

const ProductSpecifications = ({ product }) => {
  console.log(product);
  return (
    <div className="bg-white shadow p-6 rounded space-y-6">
      <h3 className="bg-gray-50 p-4">Product Specifications</h3>
      <div className="grid grid-cols-6 items-center">
        <p className="text-sm text-gray-600">Category</p>
        <div className="col-span-5">
          <Breadcrumb
            icon={
              <Link href="/" className="text-sm !text-black">
                Leezo
              </Link>
            }
            className="max-w-full -ml-3"
          >
            <Breadcrumb.Item className="min-w-max !text-black">
              Computers & Peripherals
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <div className="grid grid-cols-6 items-center">
        <p className="text-sm text-gray-600">Material</p>
        <p className="col-span-5 text-sm">Canvas</p>
      </div>
      <div className="grid grid-cols-6 items-center">
        <p className="text-sm text-gray-600">Occasion</p>
        <p className="col-span-5 text-sm">Casual</p>
      </div> */}
      <div className="grid grid-cols-6 items-center">
        <p className="text-sm text-gray-600">Stock</p>
        <p className="col-span-5 text-sm">{product?.current_stock}</p>
      </div>
      <div className="grid grid-cols-6 items-center">
        <p className="text-sm text-gray-600">Ships Type</p>
        <p className="col-span-5 text-sm uppercase">{product?.shipping_type}</p>
      </div>

      <h3 className="bg-gray-50 p-4">Product Description</h3>
      {/* <p className='text-sm text-gray-700'>
                ============ The above is the product introduction ==========
                <br />
                Dear customers, welcome to our store;
                <br />

                Hello, our shop is a foreign shop. 1-2 weeks delivery.
                <br />

                We have an excellent delivery team, every product we will carefully check and send, ensure product quality. We will arrange shipment as soon as possible. If you have any questions, you can consult our customer service.
                <br />
                Check the address and telephone number of the goods. Make sure before you buy.
                <br />
                ▷ Because the display is different from the light. The actual color may be different from the image shown.
                <br />
                ▷ If our products have no size / color, please contact us. Thank you.
                <br />
                ▷ Chinese size. Please allow 3-5cm error tolerance.
                <br />
                Your feedback is very important to us.
                <br />
                If you are satisfied with our products and services, please give me a five-star rating. Thank you very much!
                <br />
                We always provide you with the best price and service.
                <br />
                Please contact us before neutral (3 stars) or negative (1-2 stars) comments.
                <br />
                We will try our best to solve the problem and make you happy shopping here
                <br />
                Ad306 khaki
                <br />
                Ad306 Gray
                <br />
                Ad306 Black
                <br />
                Clearance broken code ending 01
                <br />
                Clearing broken code ending 02
                <br />
                Clearance broken code ending 03
                <br />
                39
                <br />
                40
                <br />
                41
                <br />
                42
                <br />
                43
                <br />
                44
                <br />
                <i>
                    Important note: No steel head, no steel head
                </i>
            </p> */}
      <p
        className="px-2"
        dangerouslySetInnerHTML={{ __html: product?.description }}
      />
    </div>
  );
};

export default ProductSpecifications;
