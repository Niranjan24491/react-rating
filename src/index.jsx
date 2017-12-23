import React from "react";
import { render } from "react-dom";
import Rating from "./Rating";

render(
  <Rating
    ratingType={"circle"}
    rating={9}
    ratingName={"React"}
    image={false}
    textPosition={"right"}
    tooltip={true}
    maxRange={10}
    color={"#009688"}
  />,
  document.getElementById("App")
);
