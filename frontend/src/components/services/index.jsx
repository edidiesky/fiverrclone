import React, { useEffect } from "react";
import GigsIndex from "./gigs";
import PaginationIndex from "./pagination";
import TopHeader from "./top";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllGigs } from "../../Features/gigs/gigsReducer";
import Header from "../common/Header";
import { cleargetCategory, getCategory } from "../../Features/gigs/gigsSlice";

export default function Servicesindex() {
  const { category1, category2 } = useParams();
  // console.log(category1, category2);
  const { category, minprice, maxprice } = useSelector((store) => store.gigs);
  const dispatch = useDispatch();
  useEffect(() => {
    // get the category
    dispatch(cleargetCategory());
    dispatch(getCategory(category2 ? category2 : category1));
    dispatch(getAllGigs());
  }, [category, minprice, maxprice, category1, category2]);
  return (
    <div>
      <Header type={"service"} />
      <div className="w-90 auto flex column gap-2 py-6">
        <TopHeader title={category2 ? category2 : category1} />
        <GigsIndex />
        {/* <PaginationIndex /> */}
      </div>
    </div>
  );
}
