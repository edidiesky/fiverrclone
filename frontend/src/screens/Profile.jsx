import React, {useEffect} from "react";
import { Header, Meta } from "../components/common";
import ProfileIndex from "../components/profile";

export default function Profile() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Meta />
      <Header />
      <ProfileIndex />
    </div>
  );
}
