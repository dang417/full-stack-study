import React from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import { FifthComponent } from "./FirstComponent";
import LearningJavaScript from "./LearningJavaScript";

export default function LearningComponent() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <LearningJavaScript />
    </div>
  );
}
