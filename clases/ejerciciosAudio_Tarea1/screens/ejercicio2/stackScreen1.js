import { View, Text, Button } from "react-native";
import { useState, useContext } from "react";
import Context from "../../context/context";

export default function StackScreen1(props) {
    const { setAudio } = useContext(Context);

    const loadAudio = (text) => {
        setAudio(require("../audio/audio.mp3"));
        props.navigation.navigate("StackScreen2");
    }

    return (
        <View>
            <Button title="pulsar" onPress={() => loadAudio()}/>
        </View>
    );
}