import React from "react";
import { Image, View } from "react-native";
import GoBackHomeBtn from "../components/go_back_home_btn";

export default function Orange() {
  return (
    <View>
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6GoLpPXoOkT0lAuFcxXwJSQ7nxtRQqVJLg&s" }}
        style={{ height: 300, width: 500 , alignSelf: 'center' }}
      />
      <GoBackHomeBtn />
    </View>
  );
}