import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs"]; //homework to loop through list using map

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Valentine" />
      <Button name="Javascript" />
      <Button name="Cooking" />
      <Button name="Apple" />
      <Button name="Gadgets" />
      <Button name="Airplanes" />
    </div>
  );
};

export default ButtonList;
