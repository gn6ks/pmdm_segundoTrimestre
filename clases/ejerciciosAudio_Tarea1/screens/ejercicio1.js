import { View, Button, Text } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState, useContext } from "react";

export default function Ejercicio1() {
  async function playLocalSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../audio/audio.mp3")
    );
    await sound.playAsync();
  }

  return (
    <View style={{justifyContent: "center", marginLeft: "40%"}}>
      <Button title="pulsar" onPress={() => playLocalSound()} />
    </View>
  );
};
