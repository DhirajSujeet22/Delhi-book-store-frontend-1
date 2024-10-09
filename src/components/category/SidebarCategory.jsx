import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const SidebarCategory = ({}) => {
  const pathname = useParams();
  const location = useLocation();


  return (
    <div>
      {" "}
      <Link to={"/"}>
        <p className=" h-fit font-semibold text-sm ">Categories</p>
      </Link>
      <ul className=" pl-3 ">
        <li>
          <Link
            to={`/category/${parentCategory.categories_id}`}
            className="text-sm font-semibold"
          >
            {parentCategory.categories_name.charAt(0).toUpperCase() +
              parentCategory.categories_name.slice(1).toLowerCase()}
          </Link>
        </li>
        {location.pathname.includes("sub") && (
          <li className=" pl-3 ">
            <Link
              to={`/category/${parentCategory.categories_id}`}
              className="text-sm font-semibold"
            >
              {parentCategory.categories_name.charAt(0).toUpperCase() +
                parentCategory.categories_name.slice(1).toLowerCase()}
            </Link>
          </li>
        )}
      </ul>
      <div
        className={`${
          location.pathname.includes("sub") ? "pl-6" : "pl-3"
        }  text-balance font-normal max-h-96 overflow-x-hidden overflow-y-auto `}
      >
        <ul className=" pl-3 ">
          {category.map((cat, index) => (
            <li key={index}>
              <Link
                to={`/category/${cat.categories_id}`}
                className="text-xs font-medium text-black hover:text-[#DF7921]"
              >
                {cat.categories_name.charAt(0).toUpperCase() +
                  cat.categories_name.slice(1).toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarCategory;
