import { View, Text, Button, StyleSheet } from "react-native";
import { useState, useContext, useEffect } from "react";
import { Audio } from "expo-av";
import Context from "../../context/context";

export default function StackScreen2(props) {
  const { audio } = useContext(Context);
  const [sound, setSound] = useState();

  const playAudio = async () => {
    const { sound: newAudio } = await Audio.Sound.createAsync(
      audio
    );
    setSound(newAudio);
    await newAudio.playAsync();
  };

  const toggleAudio = async () => {
    try {
      const result = await sound.getStatusAsync();
      if (!result.isLoaded) return;

      if (result.isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const stopAudio = async () => {
    await sound.stopAsync();
  };

  useEffect(() => {
    playAudio();
  }, []);

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
