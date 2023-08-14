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
  ProtectRoute,
} from "./screens";

import {
  LayoutList,
  // Statistics,
  AdminProductList,
  ProfileList,
  Customers,
  // EditUser,
  OrderList,
  CreateProductIndex,
  Statistics,
} from "./screens/Dashboard/pages";
import { useDispatch, useSelector } from "react-redux";
import LoaderIndex from "./components/loaders";
import Order from "./screens/Order";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);
  const [height, setHeight] = useState(0);
  return (
    <>
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
            <Route path=":id/order-success" element={<Order />} />
            <Route
              path="categories/:category1/:category2"
              element={<Services />}
            />
            <Route path="categories/:category1" element={<Services />} />
            <Route
              path="profile/:username"
              element={
                <ProtectRoute>
                  <Profile />
                </ProtectRoute>
              }
            />
            <Route path="explore" element={<Explore />} />
          </Route>

          <Route path={"/seller_onboarding"} element={<SellerLayout />}>
            <Route index element={<SellerPage1 />} />
            <Route path="dont" element={<SellerPage2 />} />
            <Route exact path="personal_info" element={<Personal1 />} />
            <Route exact path="professional_info" element={<Professional />} />
          </Route>

          <Route
            exact
            path={"/dashboard"}
            element={
              <ProtectRoute type={"dashboard"}>
                <LayoutList />
              </ProtectRoute>
            }
          >
            <Route index element={<Statistics />} />
            <Route exact path="profile" element={<ProfileList />} />
            <Route exact path="gigs" element={<AdminProductList />} />
            <Route exact path="users" element={<Customers />} />

            <Route path="order" element={<OrderList />} />

            <Route path="create-gig" element={<CreateProductIndex />} />
            <Route path="create-gig/:id" element={<CreateProductIndex />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
