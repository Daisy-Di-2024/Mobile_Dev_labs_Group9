import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import Increment from "../components/Increment";
import Decrement from "../components/Decrement";
import GoBackHomeBtn from "../components/go_back_home_btn";


export default function Lab3() {
    const [count, setCount] = useState(0);


    return (
        <View>
            <Text>Lab 3</Text>
            <Text>Count: {count}</Text>
            <Increment count={count} setCount={setCount} />
            <Decrement count={count} setCount={setCount} />
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <GoBackHomeBtn />
        </View>
    );

}