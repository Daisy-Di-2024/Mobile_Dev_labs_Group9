import React from "react";
import { Image, View } from "react-native";
import GoBackHomeBtn from "../components/go_back_home_btn";

export default function Apple() {
  return (
    <View>
      <Image
        source={{ uri: "https://hips.hearstapps.com/hmg-prod/images/ripe-apple-royalty-free-image-1659454396.jpg?crop=0.924xw:0.679xh;0.0197xw,0.212xh&resize=980:*" }}
        style={{ height: 500, width: 500, alignSelf: 'center' }}
      />
      <GoBackHomeBtn />
    </View>
  );
}