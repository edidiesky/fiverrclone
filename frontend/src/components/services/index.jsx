import React, { useEffect } from "react";
import GigsIndex from "./gigs";
import PaginationIndex from "./pagination";
import TopHeader from "./top";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllGigs } from "../../Features/gigs/gigsReducer";
import Header from "../common/Header";

export default function Servicesindex() {
  const { category1, category2 } = useParams();
  // console.log(category1, category2);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGigs({ category: category2 ? category2 : category1 }));
  }, [category2]);
  return (
    <div>
      <Header type={"service"} />
      <div className="w-90 auto flex column gap-2 py-6">
        <TopHeader title={category2} />
        <GigsIndex />
        <PaginationIndex />
      </div>
    </div>
  );
}
