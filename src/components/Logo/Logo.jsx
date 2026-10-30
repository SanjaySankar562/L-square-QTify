import React from "react";
import LogoImage from "../../assets/Group 1.png";

export default function Logo() {
  // Use the shared brand asset wherever the logo is displayed.
  return <img src={LogoImage} alt="logo" width={67} />;
}
