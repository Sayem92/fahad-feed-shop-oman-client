import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const CategoriesProducts = () => {
  const products = useLoaderData();
  // console.log("category Pro",products);

  // const unSold = products.filter(pro => pro.sold !== true)
  // console.log("unsold", unSold);

  // if (!unSold?.length) {
  //     return <h1 className='md:m-20 m-10 text-4xl text-blue-600'>No product available !!!</h1>
  // }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 pt-10 pb-28 md:px-12 lg:px-8">
        {products?.map((pro) => (
          <ProductsCard key={pro._id} pro={pro}></ProductsCard>
        ))}
      </div>
      <div className="flex justify-center align-middle pb-12">
        <Link to="/home">
          <button className="btn bg-gray-900 border-none px-8">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesProducts;
