import { View, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { Audio } from "expo-av";

export default function Ejercicio1() {
  const [audio, setAudio] = useState(null);

  const playAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../ejerciciosAudio_Tarea1/audio/audio.mp3")
    );
    setAudio(sound);
    await sound.playAsync();
  };

  const toggleAudio = async () => {
    try {
      const result = await audio.getStatusAsync();
      if (!result.isLoaded) return;

      if (result.isPlaying) {
        await audio.pauseAsync();
      } else {
        await audio.playAsync();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const stopAudio = async () => {
    if (audio) {
      await audio.stopAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Play" onPress={playAudio} />
      <Button title="Pause / Resume" onPress={toggleAudio} />
      <Button title="Stop" onPress={stopAudio} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});