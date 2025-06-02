import React from "react";
import { Image } from "react-native";

export default function Apple() {
    return (
    <Image
      source={{ uri: "https://hips.hearstapps.com/hmg-prod/images/ripe-apple-royalty-free-image-1659454396.jpg?crop=0.924xw:0.679xh;0.0197xw,0.212xh&resize=980:*" }}
      style={{ height: 300, width: 500 }}
    />

  );
}