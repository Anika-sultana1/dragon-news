import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import star from "../../assets/star.png";

const NewsCard = ({ news }) => {
  const { title, author, image_url, rating, total_view, details } = news;

  return (
    <div className="rounded-lg shadow-lg overflow-hidden max-w-md mx-auto my-4 p-5">
      {/* Author & Date */}
      <div className="flex items-center justify-between mb-2 bg-base-200 p-3 w-full">
        <div className="flex  gap-1">
          <img
            src={author.img}
            alt={author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <CiShare2 />
          <CiBookmark />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="font-bold text-lg mb-2">{title}</h2>

        {/* Thumbnail / Image */}
        <img src={image_url} alt={title} className="w-full h-56 object-cover" />

        {/* Details */}
        <p className=" text-sm mb-2">
          {details.length > 120 ? (
    <>
      {details.slice(0, 120)}
      <span className="text-orange-500 ml-1 cursor-pointer">See More</span>
    </>
  )
          : details}
        </p>

        {/* Rating & Views */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-1 text-sm font-medium ">
            <div className="flex gap-1  text-orange-500">
              <img src={star} alt="" /> <img src={star} alt="" />{" "}
              <img src={star} alt="" /> <img src={star} alt="" />{" "}
              <img src={star} alt="" />
            </div>
            <p className="text-gray-500">{rating.number}({rating.badge})</p>
          </div>
          <span className="text-sm text-gray-500">{total_view} views</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
