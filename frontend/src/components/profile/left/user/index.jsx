import React, { useState } from "react";
import Shared from "./Shared";
import UserInfo from "./UserBottomInfo";
import UserTopInfo from "./UserTopInfo";
import { AnimatePresence } from "framer-motion";
import Profileform from "../../../modals/Profileform";
import { useSelector } from "react-redux";
export default function UserIndex() {
  const { userInfo, profilemodal } = useSelector((store) => store.user);
  const [formdata, setFormdata] = useState({
    image: [],
    username: "",
    description: "",
    information: "",
  });

  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);
  const [image, setImage] = useState([]);
  return (
    <div className="flex w-100 column gap-2">
      <UserTopInfo image={image} setImage={setImage} />
      <UserInfo />
      <Shared />

      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {profilemodal && (
          <Profileform
            language={language}
            setLanguage={setLanguage}
            skills={skills}
            setSkills={setSkills}
            formdata2={formdata}
            setFormdata={setFormdata}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
