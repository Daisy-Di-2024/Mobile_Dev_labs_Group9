import React from "react";
import { Image, View } from "react-native";
import GoBackHomeBtn from "../components/go_back_home_btn";

export default function Mango() {
  return (
    <View>
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0Wfpzw8BkVS0tkIF8mVR-MatKmkaFlREGA&s" }}
        style={{ height: 300, width: 500 , alignSelf: 'center' }}
      />
      <GoBackHomeBtn />
    </View>
  );
}