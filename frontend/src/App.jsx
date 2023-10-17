import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Layout,
  Business,
  Services,
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
import LoaderIndex from "./components/loaders";
import Order from "./screens/Order";
import Orders from "./screens/Orders";

// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URLS;
//
const HomeImport = React.lazy(() => import("./screens/Home"));
const SingleImport = React.lazy(() => import("./screens/Single"));
const ProfileImport = React.lazy(() => import("./screens/Profile"));
export default function App() {
  useEffect(() => {
    AOS.init();
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);
  const [height, setHeight] = useState(0);
  // console.log(import.meta.env.VITE_API_BASE_URLS);
  return (
    <>
      <div className="based" style={{ height }}>
        <Routes>
          <Route path="*" element={<Error />}></Route>
          <Route path="inbox" element={<Chat />}></Route>
          <Route path="/business" element={<Business />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path={"/"} element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<LoaderIndex />}>
                  <HomeImport />
                </Suspense>
              }
            />
            <Route
              path="gigs/:id"
              element={
                <Suspense fallback={<LoaderIndex />}>
                  <SingleImport />
                </Suspense>
              }
            />
            <Route path="gigs" element={<Services />} />
            <Route path=":id/order-success" element={<Order />} />
            <Route path="order" element={<Orders />} />
            <Route
              path="categories/:category1/:category2"
              element={<Services />}
            />
            <Route path="categories/:category1" element={<Services />} />
            <Route path="search/:search" element={<Services />} />
            <Route
              path="profile/:username"
              element={
                <ProtectRoute>
                  <Suspense fallback={<LoaderIndex />}>
                    <ProfileImport />
                  </Suspense>
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
            path={"/dashboard/"}
            element={
              <ProtectRoute type={"dashboard"}>
                <LayoutList />
              </ProtectRoute>
            }
          >
            <Route exact path="" element={<Statistics />} />
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
