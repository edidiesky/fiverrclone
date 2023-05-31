import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  Layout,
  Home,
  Business,
  Single,
  Services,
  Profile,
  Explore,
  Error,
  Checkout,
  Chat,
  SellerPage1,
  SellerPage2,
  SellerLayout,
  Personal1,
  Professional,
  Login,
  Register,
} from "./screens";

import {
  LayoutList,
  // Statistics,
  // AdminProductList,
  ProfileList,
  // Customers,
  // EditUser,
  CreateProductIndex,
} from "./screens/Dashboard/pages";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path="*" element={<Error />}></Route>
        <Route path="inbox" element={<Chat />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gigs/:id" element={<Single />} />
          <Route path="gigs" element={<Services />} />
          <Route
            path="categories/:category1/:category2"
            element={<Services />}
          />
          <Route path="categories/:category1" element={<Services />} />
          <Route path="profile" element={<Profile />} />
          <Route path="join/login" element={<Login />} />
          <Route path="join/register" element={<Register />} />
          <Route path="explore" element={<Explore />} />
        </Route>

        <Route path={"/seller_onboarding"} element={<SellerLayout />}>
          <Route path="do" element={<SellerPage1 />} />
          <Route path="dont" element={<SellerPage2 />} />
          <Route exact path="personal_info" element={<Personal1 />} />
          <Route exact path="professional_info" element={<Professional />} />
        </Route>

        <Route exact path={"/dashboard/"} element={<LayoutList />}>
          <Route exact path="profile" element={<ProfileList />} />
          <Route exact path="create-product" element={<CreateProductIndex />} />
        </Route>
      </Routes>
    </div>
  );
}
