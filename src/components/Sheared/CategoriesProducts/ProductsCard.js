// import { useContext, useState } from 'react';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
// import Loading from "../../../Loading/Loading";
import { useState } from "react";
import Skeleton from "../../../Loading/skeleton";
// import UseAdmin from '../../../api/UseAdmin';
// import UseSeller from '../../../api/UseSeller';
// import { AuthContext } from '../../../AuthProvider/AuthProvider';
// import BookingModal from './BookingModal';

const ProductsCard = ({ pro }) => {
  const { name, image, price, code } = pro;
  // const [product, setProduct] = useState(null);
  // const { user } = useContext(AuthContext);
  // const [isSeller] = UseSeller(user?.email);
  // const [isAdmin] = UseAdmin(user?.email)
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="card card-compact md:w-full bg-base-100 shadow-xl">
          <figure>
            <PhotoProvider
              speed={() => 800}
              easing={(type) =>
                type === 2
                  ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                  : "cubic-bezier(0.34, 1.56, 0.64, 1)"
              }
            >
              <PhotoView src={image}>
                <img
                  style={{ objectFit: "cover" }}
                  className="rounded-lg h-96 w-64"
                  src={image}
                  alt="products"
                />
              </PhotoView>
            </PhotoProvider>
          </figure>
          <div className="card-body space-y-0">
            <h2 className="card-title text-3xl">{name}</h2>
            <div className="flex justify-between pb-3">
              <h1 className="text-xl text-blue-600 font-semibold">
                Price: {price} R
              </h1>{" "}
              <p className="text-xl text-end text-red-600 font-medium">
                Code: {code}
              </p>
            </div>
            <a
              className="w-full"
              href=" https://wa.me/message/MPYZNU3ETTXZP1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn w-full bg-green-600 border-none">
                Order
              </button>
            </a>
            {/* <p className='text-xl'>Post: {timePosted}</p> */}
            {/* <div className="card-actions justify-end">

                        {!isSeller && !isAdmin &&
                            <label
                                htmlFor="bookingModal"
                                onClick={() => setProduct(pro)}
                                className='btn btn-info text-white'>Book Now</label>
                        }
                    </div> */}
          </div>
        </div>
      )}
      {/* {
                product &&
                <BookingModal
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>
            } */}
    </div>
  );
};

export default ProductsCard;
