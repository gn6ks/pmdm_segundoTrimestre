import { View, Text, Button } from "react-native";
import { useState, useContext, useEffect } from "react";
import { Audio } from "expo-av";
import Context from "../../context/context";

export default function StackScreen2(props) {
  const { audio } = useContext(Context);

  const playLocalAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(audio);
    await sound.playAsync();
  }

  useEffect(() => {
    playLocalAudio();
  }, []);

  return (
    <View>
      <Text>sonando...</Text>
    </View>
  );
}