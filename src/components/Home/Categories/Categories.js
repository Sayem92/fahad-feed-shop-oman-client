// import axios from "axios";
import React from "react";

// import { useState } from "react";
// import { useEffect } from "react";
// import Loading from "../../../Loading/Loading";
import Category from "./Category";

const Categories = () => {
  // const [categories, setCategory] = useState([]);
  // const [loading, setLoading] = useState(false);
  const categoryData = [
    {
      categoryName: "Cow, Goat and Horse Feed",
      categoryImage: "https://i.ibb.co/zh0L65S/cow-goat-horse.jpg",
    },
    {
      categoryName: "Chickens, Pigeon Feed",
      categoryImage: "https://i.ibb.co/85F2S50/murgi-kobutor.jpg",
    },
    {
      categoryName: "Agriculture materials",
      categoryImage: "https://i.ibb.co/wwbdK4J/agri-materials.jpg",
    },
    {
      categoryName: "Seeds",
      categoryImage: "https://i.ibb.co/BjZYBbd/seeds.jpg",
    },
    {
      categoryName: "Other Products",
      categoryImage: "https://i.ibb.co/bFFnGfD/others-agri-tools.jpg",
    },
  ];

  // useEffect(() => {
  //     setLoading(true)
  //     axios.get('https://assignment-12-server-eosin.vercel.app/categories')
  //         .then(data => {
  //             setCategory(data.data)
  //             setLoading(false)
  //         })
  // }, [])

  // if (loading) {
  //   return <Loading></Loading>;
  // }

  return (
    <div className="py-20">
      <h1 className="p-2 text-4xl text-center text-blue-400 font-semibold">
        Choose Your Category Products
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 py-10 lg:px-28">
        {categoryData?.map((cate, i) => (
          <Category key={i} cate={cate}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
