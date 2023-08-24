import React, { useEffect, useState } from "react";
import Shared from "./Shared";
import UserInfo from "./UserBottomInfo";
import UserTopInfo from "./UserTopInfo";
import { AnimatePresence } from "framer-motion";
import Profileform from "../../../modals/Profileform";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../loaders/Message";
import { clearUserAlertError } from "../../../../Features";
import LoaderIndex from "../../../loaders";
export default function UserIndex() {
  const {
    userInfo,
    profilemodal,
    alertText,
    alertType,
    showAlert,
    isLoading
  } = useSelector((store) => store.user);
  const dispatch = useDispatch()
  const [formdata, setFormdata] = useState({
    image: [],
    username: "",
    description: "",
    information: "",
  });

  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);
  const [image, setImage] = useState([]);

    useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearUserAlertError());
      }, 5000);
      return () => clearTimeout(dispatch(clearUserAlertError()), 4000);
    }
  }, [showAlert]);

  return (
    <div className="flex w-100 column gap-2">
      {
        isLoading && <LoaderIndex/>
      }
      <Message
        showAlert={showAlert}
        alertText={alertText}
        alertType={alertType}
        // handleClearAlert={dispatch(clearUserAlertError())}
      />
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
