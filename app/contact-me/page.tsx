import React from "react";
import { contactMeText } from "../data/data";
import FormMission from "./components/form";

const ContactMe = () => {
  return (
    <div className="flex flex-col w-11/12 content-center m-auto mt-10">
      <h2>Contact me</h2>
      <div className="flex flex-col xl:flex-row xl:w-9/12 w-full content-center m-auto bg-grey-light p-10 gap-10">
        <div className="flex flex-col xl:w-2/4 w-full">
          <h3 className="text-2xl mb-10">{contactMeText.title}</h3>
          <p className="w-full">{contactMeText.body}</p>
        </div>
        <div className="xl:w-2/4 w-full">
          <FormMission />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
